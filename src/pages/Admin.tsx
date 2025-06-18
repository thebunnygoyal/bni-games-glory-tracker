
import React from 'react';
import Navigation from '../components/Navigation';
import { Settings, Users, Shield, Activity } from 'lucide-react';

const Admin = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 font-inter">Admin Panel</h1>
          <p className="text-lg text-gray-600">Manage system settings and user permissions</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <Users className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">User Management</h3>
            <p className="text-gray-600 text-sm mb-4">Add, remove, and manage user roles</p>
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
              Manage Users
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <Settings className="w-8 h-8 text-green-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Game Settings</h3>
            <p className="text-gray-600 text-sm mb-4">Configure dates, rules, and coin values</p>
            <button className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors">
              Configure
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <Activity className="w-8 h-8 text-purple-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Audit Log</h3>
            <p className="text-gray-600 text-sm mb-4">View all system changes and activities</p>
            <button className="w-full bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 transition-colors">
              View Logs
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <Shield className="w-8 h-8 text-red-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Security</h3>
            <p className="text-gray-600 text-sm mb-4">Manage security settings and permissions</p>
            <button className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors">
              Security
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Admin Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-semibold">User role updated</p>
                <p className="text-sm text-gray-600">John Doe promoted to Chapter Captain</p>
              </div>
              <span className="text-sm text-gray-500">2 hours ago</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-semibold">Game settings modified</p>
                <p className="text-sm text-gray-600">Coin values updated for referrals</p>
              </div>
              <span className="text-sm text-gray-500">1 day ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
