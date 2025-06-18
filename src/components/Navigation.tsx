
import React, { useState } from 'react';
import { Trophy, Users, Target, Settings, HelpCircle, Menu, X, Code } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Dashboard', icon: Target },
    { path: '/chapters', label: 'Chapters', icon: Users },
    { path: '/scoring', label: 'Scoring', icon: Trophy },
    { path: '/admin', label: 'Admin', icon: Settings },
    { path: '/team', label: 'Team', icon: Users },
    { path: '/help', label: 'Help', icon: HelpCircle }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              <Trophy className="w-8 h-8 text-bni-red mr-2" />
              <div>
                <h1 className="text-xl font-bold text-gray-800 font-inter">BNI GameTracker</h1>
                <p className="text-xs text-bni-gray">Pro</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.path}
                  href={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'bg-bni-red text-white shadow-md'
                      : 'text-gray-600 hover:text-bni-red hover:bg-red-50'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="font-medium">{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* Sync Status Indicator */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600">Synced</span>
            </div>
            
            {/* User Profile */}
            <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-3 py-2">
              <div className="w-8 h-8 bg-bni-red rounded-full flex items-center justify-center text-white text-sm font-bold">
                A
              </div>
              <span className="text-sm font-medium text-gray-700">Admin</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-bni-red hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 animate-fade-in">
            <div className="space-y-2">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                      isActive(item.path)
                        ? 'bg-bni-red text-white shadow-md'
                        : 'text-gray-600 hover:text-bni-red hover:bg-red-50'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </a>
                );
              })}
            </div>
            
            {/* Mobile Sync Status */}
            <div className="flex items-center justify-between px-4 py-3 mt-4 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">System Synced</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-bni-red rounded-full flex items-center justify-center text-white text-sm font-bold">
                  A
                </div>
                <span className="text-sm font-medium text-gray-700">Admin</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
