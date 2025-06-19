
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Trophy, Users, Target, Settings, HelpCircle, Users2 } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Dashboard', icon: Trophy },
    { path: '/team', label: 'Team', icon: Users },
    { path: '/chapters', label: 'Chapters', icon: Users2 },
    { path: '/scoring', label: 'Scoring', icon: Target },
    { path: '/admin', label: 'Admin', icon: Settings },
    { path: '/help', label: 'Help', icon: HelpCircle },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Trophy className="w-8 h-8 text-red-600 mr-3" />
            <span className="text-xl font-bold text-gray-800">BNI GameTracker Pro</span>
          </div>
          
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-red-600 text-white'
                      : 'text-gray-600 hover:text-red-600 hover:bg-gray-100'
                  }`}
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
