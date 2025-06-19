
import React from 'react';
import Navigation from '../components/Navigation';
import { Users, TrendingUp } from 'lucide-react';

const Chapters = () => {
  const chapters = [
    { name: 'INCREDIBLEZ', members: 25, captain: 'John Doe', score: 8650 },
    { name: 'KNIGHTZ', members: 28, captain: 'Jane Smith', score: 8200 },
    { name: 'ETERNAL', members: 22, captain: 'Mike Johnson', score: 7980 },
    { name: 'CELEBRATIONS', members: 26, captain: 'Sarah Wilson', score: 7650 },
    { name: 'OPULANCE', members: 24, captain: 'David Brown', score: 7420 },
    { name: 'EPIC', members: 27, captain: 'Lisa Davis', score: 7200 },
    { name: 'VICTORY', members: 23, captain: 'Tom Wilson', score: 6980 },
    { name: 'ACHIEVERZ', members: 25, captain: 'Anna Miller', score: 6750 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">BNI Chapters</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chapters.map((chapter) => (
            <div key={chapter.name} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-red-600">{chapter.name}</h3>
                <TrendingUp className="w-6 h-6 text-green-500" />
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <Users className="w-4 h-4 mr-2" />
                  <span>{chapter.members} members</span>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Captain</p>
                  <p className="font-semibold">{chapter.captain}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Current Score</p>
                  <p className="text-2xl font-bold text-red-600">{chapter.score}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chapters;
