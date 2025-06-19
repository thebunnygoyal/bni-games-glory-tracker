import React from 'react';
import { useAuth } from '../lib/auth/auth.context';
import { Link } from 'react-router-dom';

export function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold">BNI Games Glory Tracker</h1>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-gray-700 mr-4">
                Welcome, {user?.name} ({user?.role})
              </span>
              <button
                onClick={logout}
                className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              to="/team"
              className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Team Management
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Manage your team members and assignments
                </p>
              </div>
            </Link>

            <Link
              to="/scoring"
              className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Scoring
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Track scores and performance metrics
                </p>
              </div>
            </Link>

            <Link
              to="/chapters"
              className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Chapters
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  View and manage chapter information
                </p>
              </div>
            </Link>

            {(user?.role === 'admin' || user?.role === 'captain') && (
              <Link
                to="/admin"
                className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Admin Panel
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Administrative functions and settings
                  </p>
                </div>
              </Link>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;