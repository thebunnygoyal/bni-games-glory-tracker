export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'captain' | 'user';
  createdAt: Date;
  lastLogin?: Date;
}

export interface AuthSession {
  token: string;
  expiresAt: number;
  refreshToken?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthState {
  user: User | null;
  session: AuthSession | null;
  isLoading: boolean;
  error: string | null;
}