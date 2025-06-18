
import React from 'react';
import Navigation from '../components/Navigation';
import { Users, Target, Calendar, Plus } from 'lucide-react';

const Chapters = () => {
  const chapters = [
    { id: 1, name: 'INCREDIBLEZ', memberCount: 25, captain: 'John Doe', coach: 'Alice Smith' },
    { id: 2, name: 'KNIGHTZ', memberCount: 28, captain: 'Jane Smith', coach: 'Bob Johnson' },
    { id: 3, name: 'ETERNAL', memberCount: 22, captain: 'Mike Johnson', coach: 'Carol Davis' },
    { id: 4, name: 'CELEBRATIONS', memberCount: 26, captain: 'Sarah Wilson', coach: 'David Lee' },
    { id: 5, name: 'OPULANCE', memberCount: 24, captain: 'David Lee', coach: 'Eva Brown' },
    { id: 6, name: 'EPIC', memberCount: 23, captain: 'Lisa Brown', coach: 'Frank Wilson' },
    { id: 7, name: 'VICTORY', memberCount: 25, captain: 'Tom Davis', coach: 'Grace Taylor' },
    { id: 8, name: 'ACHIEVERZ', memberCount: 21, captain: 'Amy Chen', coach: 'Henry Kim' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 font-inter">Chapter Management</h1>
          <p className="text-lg text-gray-600">Manage your BNI chapters and track their performance</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {chapters.map((chapter) => (
            <div key={chapter.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">{chapter.name}</h3>
                <Users className="w-6 h-6 text-bni-red" />
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Members:</span>
                  <span className="font-semibold">{chapter.memberCount}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Captain:</span>
                  <span className="font-semibold text-sm">{chapter.captain}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Coach:</span>
                  <span className="font-semibold text-sm">{chapter.coach}</span>
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <button className="w-full bg-bni-red text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors">
                  View Details
                </button>
                <button className="w-full border border-bni-red text-bni-red py-2 px-4 rounded-md hover:bg-red-50 transition-colors">
                  Submit Data
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <button className="flex items-center gap-3 bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 transition-colors">
              <Plus className="w-5 h-5" />
              Add New Member
            </button>
            <button className="flex items-center gap-3 bg-green-500 text-white p-4 rounded-lg hover:bg-green-600 transition-colors">
              <Target className="w-5 h-5" />
              Submit Weekly Data
            </button>
            <button className="flex items-center gap-3 bg-purple-500 text-white p-4 rounded-lg hover:bg-purple-600 transition-colors">
              <Calendar className="w-5 h-5" />
              Schedule Training
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chapters;
