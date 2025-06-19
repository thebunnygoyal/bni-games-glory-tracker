import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { User, AuthSession, LoginCredentials, AuthState } from './auth.types';
import { AuthService } from './auth.service';

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => Promise<void>;
  refreshSession: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    session: null,
    isLoading: true,
    error: null,
  });

  const authService = AuthService.getInstance();

  const initializeAuth = useCallback(async () => {
    try {
      const sessionData = await authService.getCurrentSession();
      if (sessionData) {
        setState({
          user: sessionData.user,
          session: sessionData.session,
          isLoading: false,
          error: null,
        });
      } else {
        setState({
          user: null,
          session: null,
          isLoading: false,
          error: null,
        });
      }
    } catch (error) {
      setState({
        user: null,
        session: null,
        isLoading: false,
        error: 'Failed to initialize authentication',
      });
    }
  }, [authService]);

  useEffect(() => {
    initializeAuth();

    const refreshInterval = setInterval(async () => {
      if (state.session) {
        const timeUntilExpiry = state.session.expiresAt - Date.now();
        if (timeUntilExpiry < 60 * 60 * 1000) {
          await refreshSession();
        }
      }
    }, 5 * 60 * 1000);

    return () => clearInterval(refreshInterval);
  }, []);

  const login = async (credentials: LoginCredentials) => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      const { user, session } = await authService.login(credentials);
      setState({
        user,
        session,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      setState({
        user: null,
        session: null,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Login failed',
      });
      throw error;
    }
  };

  const logout = async () => {
    setState(prev => ({ ...prev, isLoading: true }));
    await authService.logout();
    setState({
      user: null,
      session: null,
      isLoading: false,
      error: null,
    });
  };

  const refreshSession = async () => {
    try {
      const newSession = await authService.refreshSession();
      if (newSession) {
        setState(prev => ({
          ...prev,
          session: newSession,
        }));
      }
    } catch (error) {
      console.error('Failed to refresh session:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout, refreshSession }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}