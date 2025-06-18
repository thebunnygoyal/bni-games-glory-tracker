
import React from 'react';
import { Users, Target, TrendingUp, UserCheck } from 'lucide-react';

interface QuickStatsProps {
  stats: {
    totalReferrals: number;
    totalVisitors: number;
    attendanceRate: number;
    activeMembers: number;
  };
}

const QuickStats: React.FC<QuickStatsProps> = ({ stats }) => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 font-inter">
          Games Overview
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Total Referrals */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium text-blue-600 bg-blue-200 px-2 py-1 rounded-full">
                +12%
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-1">
              {stats.totalReferrals.toLocaleString()}
            </h3>
            <p className="text-gray-600 text-sm">Total Referrals</p>
            <div className="mt-3">
              <div className="w-full bg-blue-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">75% of target</p>
            </div>
          </div>

          {/* Total Visitors */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium text-green-600 bg-green-200 px-2 py-1 rounded-full">
                +8%
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-1">
              {stats.totalVisitors.toLocaleString()}
            </h3>
            <p className="text-gray-600 text-sm">Total Visitors</p>
            <div className="mt-3">
              <div className="w-full bg-green-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">60% of target</p>
            </div>
          </div>

          {/* Attendance Rate */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium text-amber-600 bg-amber-200 px-2 py-1 rounded-full">
                +2%
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-1">
              {stats.attendanceRate}%
            </h3>
            <p className="text-gray-600 text-sm">Attendance Rate</p>
            <div className="mt-3">
              <div className="w-full bg-amber-200 rounded-full h-2">
                <div className="bg-amber-500 h-2 rounded-full" style={{ width: `${stats.attendanceRate}%` }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">Above 95% target</p>
            </div>
          </div>

          {/* Active Members */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                <UserCheck className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium text-purple-600 bg-purple-200 px-2 py-1 rounded-full">
                +5%
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-1">
              {stats.activeMembers.toLocaleString()}
            </h3>
            <p className="text-gray-600 text-sm">Active Members</p>
            <div className="mt-3">
              <div className="w-full bg-purple-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">8 chapters participating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickStats;
