
import React from 'react';
import { TrendingUp, Users, Target, Calendar } from 'lucide-react';

interface QuickStatsProps {
  stats: {
    totalReferrals: number;
    totalVisitors: number;
    attendanceRate: number;
    activeMembers: number;
  };
}

const QuickStats: React.FC<QuickStatsProps> = ({ stats }) => {
  const statItems = [
    {
      label: 'Total Referrals',
      value: stats.totalReferrals,
      icon: TrendingUp,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      label: 'Total Visitors',
      value: stats.totalVisitors,
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      label: 'Attendance Rate',
      value: `${stats.attendanceRate}%`,
      icon: Calendar,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50'
    },
    {
      label: 'Active Members',
      value: stats.activeMembers,
      icon: Target,
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    }
  ];

  return (
    <section className="py-8 -mt-8 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center">
                  <div className={`${item.bgColor} p-3 rounded-lg mr-4`}>
                    <IconComponent className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">{item.label}</p>
                    <p className="text-2xl font-bold text-gray-800">{item.value}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickStats;
