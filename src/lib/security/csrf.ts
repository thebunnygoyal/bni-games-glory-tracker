import { generateCSRFToken } from './crypto';
import { setSecureItem, getSecureItem } from './storage';

const CSRF_TOKEN_KEY = 'csrf_token';
const CSRF_TOKEN_HEADER = 'X-CSRF-Token';

export class CSRFProtection {
  private static instance: CSRFProtection;
  private token: string | null = null;

  private constructor() {}

  static getInstance(): CSRFProtection {
    if (!CSRFProtection.instance) {
      CSRFProtection.instance = new CSRFProtection();
    }
    return CSRFProtection.instance;
  }

  async generateToken(): Promise<string> {
    const token = generateCSRFToken();
    this.token = token;
    await setSecureItem(CSRF_TOKEN_KEY, token, { expiresIn: 24 * 60 * 60 * 1000 });
    return token;
  }

  async getToken(): Promise<string> {
    if (!this.token) {
      this.token = await getSecureItem(CSRF_TOKEN_KEY);
      if (!this.token) {
        this.token = await this.generateToken();
      }
    }
    return this.token;
  }

  async validateToken(token: string): Promise<boolean> {
    const storedToken = await this.getToken();
    return token === storedToken;
  }

  getHeaderName(): string {
    return CSRF_TOKEN_HEADER;
  }

  async addToRequest(headers: HeadersInit): Promise<HeadersInit> {
    const token = await this.getToken();
    return {
      ...headers,
      [CSRF_TOKEN_HEADER]: token,
    };
  }
}

export const csrf = CSRFProtection.getInstance();