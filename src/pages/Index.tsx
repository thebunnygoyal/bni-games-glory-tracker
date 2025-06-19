
import React, { useState, useEffect } from 'react';
import { Trophy, Users, Target, Calendar, Download, Plus, Medal, Star, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Countdown from '../components/Countdown';
import Leaderboard from '../components/Leaderboard';
import QuickStats from '../components/QuickStats';
import WeeklyDataForm from '../components/WeeklyDataForm';
import { isAuthenticated, canSubmitData } from '../lib/auth';

const Index = () => {
  const [activeTab, setActiveTab] = useState<'chapters' | 'individuals'>('chapters');
  const [showDataForm, setShowDataForm] = useState(false);

  // Mock data for development
  const quickStats = {
    totalReferrals: 342,
    totalVisitors: 156,
    attendanceRate: 97.3,
    activeMembers: 189
  };

  const handleSubmitData = () => {
    if (!isAuthenticated()) {
      // Redirect to login or show login modal
      return;
    }
    setShowDataForm(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-bni-red via-red-600 to-red-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Trophy className="w-12 h-12 text-bni-amber mr-4 animate-pulse-scale" />
              <h1 className="text-5xl font-bold font-inter">BNI Independence Games 2.0</h1>
              <Trophy className="w-12 h-12 text-bni-amber ml-4 animate-pulse-scale" />
            </div>
            <p className="text-xl opacity-90 mb-8">
              Track your chapter's journey to victory in the ultimate BNI competition
            </p>
          </div>
          
          <Countdown targetDate="2025-08-01" />
          
          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button 
              onClick={handleSubmitData}
              className="bg-white text-bni-red hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Submit Weekly Data
            </button>
            <button className="bg-bni-amber text-gray-800 hover:bg-yellow-400 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Template
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-bni-red font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2">
              <Target className="w-5 h-5" />
              View Rules
            </button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <QuickStats stats={quickStats} />

      {/* Weekly Data Form */}
      {showDataForm && canSubmitData() && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <WeeklyDataForm />
            <div className="text-center mt-6">
              <button
                onClick={() => setShowDataForm(false)}
                className="text-gray-600 hover:text-gray-800 underline"
              >
                Close Form
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Leaderboard Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 font-inter">Live Leaderboard</h2>
            <p className="text-lg text-gray-600">See who's leading the race to victory</p>
          </div>

          {/* Leaderboard Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-1 shadow-lg">
              <button
                onClick={() => setActiveTab('chapters')}
                className={`px-6 py-2 rounded-md font-semibold transition-colors duration-200 flex items-center gap-2 ${
                  activeTab === 'chapters'
                    ? 'bg-bni-red text-white shadow-md'
                    : 'text-gray-600 hover:text-bni-red'
                }`}
              >
                <Users className="w-4 h-4" />
                Chapters
              </button>
              <button
                onClick={() => setActiveTab('individuals')}
                className={`px-6 py-2 rounded-md font-semibold transition-colors duration-200 flex items-center gap-2 ${
                  activeTab === 'individuals'
                    ? 'bg-bni-red text-white shadow-md'
                    : 'text-gray-600 hover:text-bni-red'
                }`}
              >
                <Medal className="w-4 h-4" />
                Individuals
              </button>
            </div>
          </div>

          <Leaderboard type={activeTab} />
        </div>
      </section>

      {/* Recent Activity */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 font-inter">Recent Activity</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <Star className="w-6 h-6 text-blue-600" />
                <h3 className="font-semibold">New Referral</h3>
              </div>
              <p className="text-gray-600">INCREDIBLEZ added 3 new referrals this week</p>
              <p className="text-sm text-gray-500 mt-2">2 hours ago</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="w-6 h-6 text-green-600" />
                <h3 className="font-semibold">Visitor Milestone</h3>
              </div>
              <p className="text-gray-600">KNIGHTZ reached 50 visitors milestone</p>
              <p className="text-sm text-gray-500 mt-2">5 hours ago</p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <Trophy className="w-6 h-6 text-amber-600" />
                <h3 className="font-semibold">Perfect Attendance</h3>
              </div>
              <p className="text-gray-600">ETERNAL maintains 100% attendance rate</p>
              <p className="text-sm text-gray-500 mt-2">1 day ago</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">&copy; 2025 BNI Independence Games 2.0</p>
          <p className="text-gray-400">
            For queries: <a href="mailto:benchmarkgames.bnikol@gmail.com" className="text-bni-amber hover:underline">benchmarkgames.bnikol@gmail.com</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
