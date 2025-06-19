
import React from 'react';
import { Medal, Trophy, Award } from 'lucide-react';

interface LeaderboardProps {
  type: 'chapters' | 'individuals';
}

const Leaderboard: React.FC<LeaderboardProps> = ({ type }) => {
  // Mock data for demonstration
  const chaptersData = [
    { rank: 1, name: 'INCREDIBLEZ', score: 8650, members: 25 },
    { rank: 2, name: 'KNIGHTZ', score: 8200, members: 28 },
    { rank: 3, name: 'ETERNAL', score: 7980, members: 22 },
    { rank: 4, name: 'CELEBRATIONS', score: 7650, members: 26 },
    { rank: 5, name: 'OPULANCE', score: 7420, members: 24 }
  ];

  const individualsData = [
    { rank: 1, name: 'John Doe', chapter: 'INCREDIBLEZ', score: 450 },
    { rank: 2, name: 'Jane Smith', chapter: 'KNIGHTZ', score: 425 },
    { rank: 3, name: 'Mike Johnson', chapter: 'ETERNAL', score: 400 },
    { rank: 4, name: 'Sarah Wilson', chapter: 'CELEBRATIONS', score: 380 },
    { rank: 5, name: 'David Brown', chapter: 'OPULANCE', score: 360 }
  ];

  const data = type === 'chapters' ? chaptersData : individualsData;

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="w-5 h-5 md:w-6 md:h-6 text-yellow-500" />;
    if (rank === 2) return <Medal className="w-5 h-5 md:w-6 md:h-6 text-gray-400" />;
    if (rank === 3) return <Award className="w-5 h-5 md:w-6 md:h-6 text-amber-600" />;
    return <span className="text-base md:text-lg font-bold text-gray-600">{rank}</span>;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-red-600 text-white px-4 md:px-6 py-3 md:py-4">
        <h3 className="text-base md:text-lg font-semibold">
          {type === 'chapters' ? 'Chapter Rankings' : 'Individual Rankings'}
        </h3>
      </div>
      
      <div className="divide-y divide-gray-200">
        {data.map((item) => (
          <div key={item.rank} className="p-3 md:p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 md:space-x-4 min-w-0 flex-1">
                <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 flex-shrink-0">
                  {getRankIcon(item.rank)}
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-gray-800 text-sm md:text-base truncate">{item.name}</h4>
                  {type === 'individuals' && (
                    <p className="text-xs md:text-sm text-gray-600 truncate">{(item as any).chapter}</p>
                  )}
                  {type === 'chapters' && (
                    <p className="text-xs md:text-sm text-gray-600">{(item as any).members} members</p>
                  )}
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-lg md:text-xl font-bold text-red-600">{item.score}</p>
                <p className="text-xs md:text-sm text-gray-600">coins</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
