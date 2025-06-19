import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './lib/auth/auth.context';
import { SecureProtectedRoute } from './components/SecureProtectedRoute';
import { LoginForm } from './components/LoginForm';
import { Dashboard } from './pages/Dashboard';
import Unauthorized from './pages/Unauthorized';
import { SecurityMonitor } from './components/SecurityMonitor';
import { clearAllSecureStorage } from './lib/security/storage';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Import existing pages
import Index from "./pages/Index";
import Team from "./pages/Team";
import Chapters from "./pages/Chapters";
import Scoring from "./pages/Scoring";
import Admin from "./pages/Admin";
import Help from "./pages/Help";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function initializeSecurity() {
  if (typeof window !== 'undefined') {
    if (process.env.NODE_ENV === 'production') {
      document.addEventListener('contextmenu', (e) => e.preventDefault());
      console.log = () => {};
      console.warn = () => {};
      console.error = () => {};
    }

    window.addEventListener('storage', (e) => {
      if (e.key && e.key.includes('bni_secure_') && e.oldValue !== e.newValue) {
        clearAllSecureStorage();
        window.location.href = '/login';
      }
    });

    window.addEventListener('beforeunload', () => {
      const keysToRemove: string[] = [];
      for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        if (key?.startsWith('bni_secure_')) {
          keysToRemove.push(key);
        }
      }
      keysToRemove.forEach(key => sessionStorage.removeItem(key));
    });
  }
}

function App() {
  useEffect(() => {
    initializeSecurity();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AuthProvider>
          <HashRouter>
            <SecurityMonitor />
            <Routes>
              <Route path="/login" element={<LoginForm />} />
              <Route path="/unauthorized" element={<Unauthorized />} />
              
              <Route path="/dashboard" element={
                <SecureProtectedRoute>
                  <Dashboard />
                </SecureProtectedRoute>
              } />
              
              <Route path="/team" element={
                <SecureProtectedRoute>
                  <Team />
                </SecureProtectedRoute>
              } />
              
              <Route path="/chapters" element={
                <SecureProtectedRoute>
                  <Chapters />
                </SecureProtectedRoute>
              } />
              
              <Route path="/scoring" element={
                <SecureProtectedRoute>
                  <Scoring />
                </SecureProtectedRoute>
              } />
              
              <Route path="/admin" element={
                <SecureProtectedRoute allowedRoles={['admin', 'captain']}>
                  <Admin />
                </SecureProtectedRoute>
              } />
              
              <Route path="/help" element={
                <SecureProtectedRoute>
                  <Help />
                </SecureProtectedRoute>
              } />
              
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </HashRouter>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;