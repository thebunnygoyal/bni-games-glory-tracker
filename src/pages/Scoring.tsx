
import React from 'react';
import Navigation from '../components/Navigation';
import { Trophy, Target, Users, Calendar } from 'lucide-react';

const Scoring = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Scoring Dashboard</h1>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Scoring Rules */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-red-600 mb-4 flex items-center">
              <Target className="w-5 h-5 mr-2" />
              Scoring System
            </h2>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold">Referrals</h3>
                <p className="text-gray-600">1 coin per referral</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold">Visitors</h3>
                <p className="text-gray-600">50 coins per visitor</p>
              </div>
              
              <div className="border-l-4 border-amber-500 pl-4">
                <h3 className="font-semibold">Attendance</h3>
                <p className="text-gray-600">-10 coins per absence</p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold">Testimonials</h3>
                <p className="text-gray-600">5 coins each (max 2)</p>
              </div>
              
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold">Trainings</h3>
                <p className="text-gray-600">25 coins each (max 3)</p>
              </div>
            </div>
          </div>
          
          {/* Current Week */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-red-600 mb-4 flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              Week 3 Progress
            </h2>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Total Referrals</span>
                <span className="font-bold text-blue-600">89</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span>Total Visitors</span>
                <span className="font-bold text-green-600">23</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span>Attendance Rate</span>
                <span className="font-bold text-amber-600">96.2%</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span>Total Testimonials</span>
                <span className="font-bold text-purple-600">47</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span>Training Completions</span>
                <span className="font-bold text-red-600">31</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Top Performers */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-red-600 mb-4 flex items-center">
            <Trophy className="w-5 h-5 mr-2" />
            Top Performers This Week
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🥇</div>
              <h3 className="font-bold">John Doe</h3>
              <p className="text-gray-600">INCREDIBLEZ</p>
              <p className="text-xl font-bold text-yellow-600">125 coins</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-2">🥈</div>
              <h3 className="font-bold">Jane Smith</h3>
              <p className="text-gray-600">KNIGHTZ</p>
              <p className="text-xl font-bold text-gray-500">110 coins</p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-2">🥉</div>
              <h3 className="font-bold">Mike Johnson</h3>
              <p className="text-gray-600">ETERNAL</p>
              <p className="text-xl font-bold text-amber-600">95 coins</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scoring;
