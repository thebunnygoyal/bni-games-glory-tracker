
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Trophy, LogOut, User, Shield } from 'lucide-react';
import { isAuthenticated, getCurrentUser, setCurrentUser, hasRole } from '../lib/auth';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const user = getCurrentUser();

  const handleLogout = () => {
    setCurrentUser(null);
    navigate('/');
    setIsOpen(false);
  };

  const navItems = [
    { path: '/', label: 'Home', icon: Trophy },
    { path: '/team', label: 'My Team' },
    { path: '/chapters', label: 'Chapters' },
    { path: '/scoring', label: 'Scoring' },
    { path: '/help', label: 'Help' },
  ];

  // Add admin link if user has admin role
  if (hasRole('admin')) {
    navItems.push({ path: '/admin', label: 'Admin', icon: Shield });
  }

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Trophy className="w-8 h-8 text-red-600" />
            <span className="text-xl font-bold text-gray-800">BNI Games</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                    isActive(item.path)
                      ? 'bg-red-100 text-red-700'
                      : 'text-gray-600 hover:text-red-600'
                  }`}
                >
                  {IconComponent && <IconComponent className="w-4 h-4" />}
                  <span>{item.label}</span>
                </Link>
              );
            })}
            
            {/* Authentication Section */}
            <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-gray-200">
              {isAuthenticated() && user ? (
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <User className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">{user.email}</span>
                    <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs">
                      {user.role}
                    </span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-1 text-gray-600 hover:text-red-600 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                >
                  Login
                </Link>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-red-600"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="space-y-2">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                      isActive(item.path)
                        ? 'bg-red-100 text-red-700'
                        : 'text-gray-600 hover:text-red-600'
                    }`}
                  >
                    {IconComponent && <IconComponent className="w-4 h-4" />}
                    <span>{item.label}</span>
                  </Link>
                );
              })}
              
              {/* Mobile Authentication Section */}
              <div className="pt-4 border-t border-gray-200">
                {isAuthenticated() && user ? (
                  <div className="space-y-2">
                    <div className="px-3 py-2 text-sm text-gray-700">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{user.email}</span>
                      </div>
                      <div className="mt-1">
                        <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs">
                          {user.role}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-2 w-full px-3 py-2 text-gray-600 hover:text-red-600 transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="block bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-700 transition-colors text-center"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
