import { z } from 'zod';
import { LoginCredentials, User, AuthSession } from './auth.types';
import { generateToken, hashPassword, verifyPassword } from '../security/crypto';
import { setSecureItem, getSecureItem, removeSecureItem } from '../security/storage';

const SESSION_KEY = 'bni_auth_session';
const SESSION_DURATION = 7 * 24 * 60 * 60 * 1000; // 7 days
const INACTIVITY_TIMEOUT = 30 * 60 * 1000; // 30 minutes

export class AuthService {
  private static instance: AuthService;
  private sessionTimeoutId?: NodeJS.Timeout;
  private lastActivity: number = Date.now();

  private constructor() {
    this.initActivityTracking();
  }

  static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  private initActivityTracking() {
    if (typeof window !== 'undefined') {
      ['mousedown', 'keydown', 'scroll', 'touchstart'].forEach(event => {
        window.addEventListener(event, () => this.updateActivity(), { passive: true });
      });
    }
  }

  private updateActivity() {
    this.lastActivity = Date.now();
  }

  private startInactivityTimer() {
    if (this.sessionTimeoutId) {
      clearTimeout(this.sessionTimeoutId);
    }

    this.sessionTimeoutId = setTimeout(() => {
      const timeSinceActivity = Date.now() - this.lastActivity;
      if (timeSinceActivity >= INACTIVITY_TIMEOUT) {
        this.logout();
      } else {
        this.startInactivityTimer();
      }
    }, 60000); // Check every minute
  }

  async login(credentials: LoginCredentials): Promise<{ user: User; session: AuthSession }> {
    const loginSchema = z.object({
      email: z.string().email('Invalid email format'),
      password: z.string().min(8, 'Password must be at least 8 characters'),
    });

    const validatedData = loginSchema.parse(credentials);
    const user = await this.authenticateUser(validatedData);
    
    if (!user) {
      throw new Error('Invalid credentials');
    }

    const session: AuthSession = {
      token: generateToken(),
      expiresAt: Date.now() + SESSION_DURATION,
      refreshToken: generateToken(),
    };

    await setSecureItem(SESSION_KEY, {
      user,
      session,
      lastActivity: Date.now(),
    });

    this.startInactivityTimer();
    return { user, session };
  }

  async logout(): Promise<void> {
    if (this.sessionTimeoutId) {
      clearTimeout(this.sessionTimeoutId);
    }
    await removeSecureItem(SESSION_KEY);
    window.location.href = '/login';
  }

  async getCurrentSession(): Promise<{ user: User; session: AuthSession } | null> {
    const storedData = await getSecureItem(SESSION_KEY);
    
    if (!storedData) {
      return null;
    }

    const { session, user } = storedData;

    if (session.expiresAt < Date.now()) {
      await this.logout();
      return null;
    }

    const timeSinceActivity = Date.now() - this.lastActivity;
    if (timeSinceActivity >= INACTIVITY_TIMEOUT) {
      await this.logout();
      return null;
    }

    return { user, session };
  }

  async refreshSession(): Promise<AuthSession | null> {
    const currentSession = await this.getCurrentSession();
    
    if (!currentSession || !currentSession.session.refreshToken) {
      return null;
    }

    const newSession: AuthSession = {
      token: generateToken(),
      expiresAt: Date.now() + SESSION_DURATION,
      refreshToken: generateToken(),
    };

    await setSecureItem(SESSION_KEY, {
      ...currentSession,
      session: newSession,
      lastActivity: Date.now(),
    });

    return newSession;
  }

  private async authenticateUser(credentials: { email: string; password: string }): Promise<User | null> {
    // Temporary secure users - replace with API call in production
    const tempUsers = [
      {
        id: '1',
        email: 'admin@bni.com',
        passwordHash: await hashPassword('Admin@123!'),
        name: 'Admin User',
        role: 'admin' as const,
      },
      {
        id: '2',
        email: 'captain@bni.com',
        passwordHash: await hashPassword('Captain@123!'),
        name: 'Team Captain',
        role: 'captain' as const,
      },
    ];

    const user = tempUsers.find(u => u.email === credentials.email);
    
    if (!user) {
      return null;
    }

    const isValid = await verifyPassword(credentials.password, user.passwordHash);
    
    if (!isValid) {
      return null;
    }

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      createdAt: new Date(),
      lastLogin: new Date(),
    };
  }
}