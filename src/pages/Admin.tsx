
import React from 'react';
import Navigation from '../components/Navigation';
import { Settings, Users, Database, FileText } from 'lucide-react';

const Admin = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Admin Panel</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* User Management */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Users className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-xl font-bold">User Management</h2>
            </div>
            <p className="text-gray-600 mb-4">Manage captains, coaches, and member access</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              Manage Users
            </button>
          </div>
          
          {/* Game Settings */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Settings className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-xl font-bold">Game Settings</h2>
            </div>
            <p className="text-gray-600 mb-4">Configure game rules, dates, and coin values</p>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
              Configure Game
            </button>
          </div>
          
          {/* Data Management */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Database className="w-8 h-8 text-purple-600 mr-3" />
              <h2 className="text-xl font-bold">Data Management</h2>
            </div>
            <p className="text-gray-600 mb-4">Sync with Google Sheets and manage data</p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors">
              Sync Data
            </button>
          </div>
          
          {/* Audit Logs */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:col-span-2 lg:col-span-3">
            <div className="flex items-center mb-4">
              <FileText className="w-8 h-8 text-red-600 mr-3" />
              <h2 className="text-xl font-bold">Audit Logs</h2>
            </div>
            <p className="text-gray-600 mb-4">View all system changes and activities</p>
            
            <div className="bg-gray-50 rounded p-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Weekly data submitted by John Doe (INCREDIBLEZ)</span>
                  <span className="text-gray-500">2 hours ago</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>User access granted to Jane Smith</span>
                  <span className="text-gray-500">5 hours ago</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Game settings updated</span>
                  <span className="text-gray-500">1 day ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
