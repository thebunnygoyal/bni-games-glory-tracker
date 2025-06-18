
import React from 'react';
import { Trophy, Medal, Award, Crown, Star, TrendingUp } from 'lucide-react';

interface LeaderboardProps {
  type: 'chapters' | 'individuals';
}

const Leaderboard: React.FC<LeaderboardProps> = ({ type }) => {
  // Mock data for chapters
  const chaptersData = [
    { rank: 1, name: 'INCREDIBLEZ', coins: 8650, members: 25, change: '+150', captain: 'John Doe' },
    { rank: 2, name: 'KNIGHTZ', coins: 8200, members: 28, change: '+120', captain: 'Jane Smith' },
    { rank: 3, name: 'ETERNAL', coins: 7850, members: 22, change: '+95', captain: 'Mike Johnson' },
    { rank: 4, name: 'CELEBRATIONS', coins: 7400, members: 26, change: '+80', captain: 'Sarah Wilson' },
    { rank: 5, name: 'OPULANCE', coins: 7200, members: 24, change: '+60', captain: 'David Lee' },
    { rank: 6, name: 'EPIC', coins: 6950, members: 23, change: '+45', captain: 'Lisa Brown' },
    { rank: 7, name: 'VICTORY', coins: 6750, members: 25, change: '+30', captain: 'Tom Davis' },
    { rank: 8, name: 'ACHIEVERZ', coins: 6500, members: 21, change: '+25', captain: 'Amy Chen' }
  ];

  // Mock data for individuals
  const individualsData = [
    { rank: 1, name: 'Rajesh Kumar', chapter: 'INCREDIBLEZ', coins: 485, referrals: 12, visitors: 8 },
    { rank: 2, name: 'Priya Sharma', chapter: 'KNIGHTZ', coins: 462, referrals: 11, visitors: 7 },
    { rank: 3, name: 'Amit Patel', chapter: 'ETERNAL', coins: 445, referrals: 10, visitors: 8 },
    { rank: 4, name: 'Sneha Gupta', chapter: 'CELEBRATIONS', coins: 425, referrals: 9, visitors: 7 },
    { rank: 5, name: 'Vikram Singh', chapter: 'OPULANCE', coins: 410, referrals: 8, visitors: 8 },
    { rank: 6, name: 'Neha Jain', chapter: 'EPIC', coins: 395, referrals: 8, visitors: 6 },
    { rank: 7, name: 'Ravi Mehta', chapter: 'VICTORY', coins: 380, referrals: 7, visitors: 7 },
    { rank: 8, name: 'Kavya Reddy', chapter: 'ACHIEVERZ', coins: 365, referrals: 7, visitors: 6 }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Award className="w-6 h-6 text-amber-600" />;
      default:
        return <span className="w-6 h-6 flex items-center justify-center text-gray-500 font-bold">#{rank}</span>;
    }
  };

  const getRankBackground = (rank: number) => {
    switch (rank) {
      case 1:
        return 'bg-gradient-to-r from-yellow-100 to-yellow-200 border-yellow-300';
      case 2:
        return 'bg-gradient-to-r from-gray-100 to-gray-200 border-gray-300';
      case 3:
        return 'bg-gradient-to-r from-amber-100 to-amber-200 border-amber-300';
      default:
        return 'bg-white border-gray-200';
    }
  };

  if (type === 'chapters') {
    return (
      <div className="max-w-6xl mx-auto">
        {/* Top 3 Podium */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {chaptersData.slice(0, 3).map((chapter) => (
            <div
              key={chapter.rank}
              className={`${getRankBackground(chapter.rank)} rounded-2xl p-6 border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                chapter.rank === 1 ? 'md:order-2 transform md:scale-110' : ''
              } ${chapter.rank === 2 ? 'md:order-1' : ''} ${chapter.rank === 3 ? 'md:order-3' : ''}`}
            >
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {getRankIcon(chapter.rank)}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{chapter.name}</h3>
                <div className="text-3xl font-bold text-bni-red mb-2 animate-pulse-scale">
                  {chapter.coins.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600 mb-3">coins</div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{chapter.members} members</span>
                  <span className="text-green-600 font-medium">{chapter.change}</span>
                </div>
                <div className="mt-3 text-xs text-gray-500">
                  Captain: {chapter.captain}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full Rankings Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-bni-red to-red-600 text-white p-6">
            <h3 className="text-2xl font-bold text-center">Chapter Rankings</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Rank</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Chapter</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">Coins</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">Members</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">Change</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Captain</th>
                </tr>
              </thead>
              <tbody>
                {chaptersData.map((chapter, index) => (
                  <tr
                    key={chapter.rank}
                    className={`hover:bg-gray-50 transition-colors ${index !== chaptersData.length - 1 ? 'border-b border-gray-100' : ''}`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {getRankIcon(chapter.rank)}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-semibold text-gray-800">{chapter.name}</div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="font-bold text-bni-red">{chapter.coins.toLocaleString()}</div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="text-gray-600">{chapter.members}</div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <TrendingUp className="w-4 h-4 text-green-500" />
                        <span className="text-green-600 font-medium">{chapter.change}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-gray-600">{chapter.captain}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  // Individual Leaderboard
  return (
    <div className="max-w-6xl mx-auto">
      {/* Top 3 Individuals */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {individualsData.slice(0, 3).map((individual) => (
          <div
            key={individual.rank}
            className={`${getRankBackground(individual.rank)} rounded-2xl p-6 border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
              individual.rank === 1 ? 'md:order-2 transform md:scale-110' : ''
            } ${individual.rank === 2 ? 'md:order-1' : ''} ${individual.rank === 3 ? 'md:order-3' : ''}`}
          >
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {getRankIcon(individual.rank)}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-1">{individual.name}</h3>
              <div className="text-sm text-gray-600 mb-3">{individual.chapter}</div>
              <div className="text-3xl font-bold text-bni-red mb-2 animate-pulse-scale">
                {individual.coins}
              </div>
              <div className="text-sm text-gray-600 mb-3">coins</div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-white bg-opacity-50 rounded-lg p-2">
                  <div className="font-semibold text-blue-600">{individual.referrals}</div>
                  <div className="text-gray-600">Referrals</div>
                </div>
                <div className="bg-white bg-opacity-50 rounded-lg p-2">
                  <div className="font-semibold text-green-600">{individual.visitors}</div>
                  <div className="text-gray-600">Visitors</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Full Individual Rankings */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-bni-red to-red-600 text-white p-6">
          <h3 className="text-2xl font-bold text-center">Individual Rankings</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Rank</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Chapter</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">Coins</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">Referrals</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">Visitors</th>
              </tr>
            </thead>
            <tbody>
              {individualsData.map((individual, index) => (
                <tr
                  key={individual.rank}
                  className={`hover:bg-gray-50 transition-colors ${index !== individualsData.length - 1 ? 'border-b border-gray-100' : ''}`}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {getRankIcon(individual.rank)}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-gray-800">{individual.name}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="chapter-badge">{individual.chapter}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="font-bold text-bni-red">{individual.coins}</div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="text-blue-600 font-medium">{individual.referrals}</div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="text-green-600 font-medium">{individual.visitors}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
