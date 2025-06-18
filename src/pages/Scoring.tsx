
import React from 'react';
import Navigation from '../components/Navigation';
import { Trophy, TrendingUp, Users, Target } from 'lucide-react';

const Scoring = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 font-inter">Scoring Dashboard</h1>
          <p className="text-lg text-gray-600">Real-time scoring and analytics for all chapters</p>
        </div>

        {/* Scoring Overview Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <Trophy className="w-8 h-8 text-yellow-500" />
              <span className="text-2xl font-bold text-gray-800">8,650</span>
            </div>
            <h3 className="font-semibold text-gray-600">Highest Score</h3>
            <p className="text-sm text-gray-500">INCREDIBLEZ</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-8 h-8 text-green-500" />
              <span className="text-2xl font-bold text-gray-800">+150</span>
            </div>
            <h3 className="font-semibold text-gray-600">Weekly Change</h3>
            <p className="text-sm text-gray-500">Average increase</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <Users className="w-8 h-8 text-blue-500" />
              <span className="text-2xl font-bold text-gray-800">189</span>
            </div>
            <h3 className="font-semibold text-gray-600">Active Members</h3>
            <p className="text-sm text-gray-500">Across all chapters</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <Target className="w-8 h-8 text-purple-500" />
              <span className="text-2xl font-bold text-gray-800">97.3%</span>
            </div>
            <h3 className="font-semibold text-gray-600">Attendance</h3>
            <p className="text-sm text-gray-500">Overall rate</p>
          </div>
        </div>

        {/* Detailed Scoring Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Detailed Scoring Breakdown</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Chapter</th>
                  <th className="px-6 py-3 text-right text-sm font-semibold text-gray-600">Referrals</th>
                  <th className="px-6 py-3 text-right text-sm font-semibold text-gray-600">Visitors</th>
                  <th className="px-6 py-3 text-right text-sm font-semibold text-gray-600">Attendance</th>
                  <th className="px-6 py-3 text-right text-sm font-semibold text-gray-600">Total Coins</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 font-semibold">INCREDIBLEZ</td>
                  <td className="px-6 py-4 text-right">2,850</td>
                  <td className="px-6 py-4 text-right">4,800</td>
                  <td className="px-6 py-4 text-right">1,000</td>
                  <td className="px-6 py-4 text-right font-bold text-bni-red">8,650</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 font-semibold">KNIGHTZ</td>
                  <td className="px-6 py-4 text-right">2,600</td>
                  <td className="px-6 py-4 text-right">4,600</td>
                  <td className="px-6 py-4 text-right">1,000</td>
                  <td className="px-6 py-4 text-right font-bold text-bni-red">8,200</td>
                </tr>
                {/* More rows would go here */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scoring;
