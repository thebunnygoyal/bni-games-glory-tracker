interface RateLimitConfig {
  windowMs: number;
  maxRequests: number;
  identifier?: string;
}

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

class RateLimiter {
  private limits: Map<string, RateLimitEntry> = new Map();

  constructor() {
    setInterval(() => this.cleanup(), 60 * 1000);
  }

  isAllowed(config: RateLimitConfig): boolean {
    const key = config.identifier || 'global';
    const now = Date.now();
    const entry = this.limits.get(key);

    if (!entry || now > entry.resetTime) {
      this.limits.set(key, {
        count: 1,
        resetTime: now + config.windowMs,
      });
      return true;
    }

    if (entry.count >= config.maxRequests) {
      return false;
    }

    entry.count++;
    return true;
  }

  reset(identifier?: string): void {
    const key = identifier || 'global';
    this.limits.delete(key);
  }

  private cleanup(): void {
    const now = Date.now();
    for (const [key, entry] of this.limits.entries()) {
      if (now > entry.resetTime) {
        this.limits.delete(key);
      }
    }
  }
}

export const rateLimiter = new RateLimiter();

export const loginRateLimit: RateLimitConfig = {
  windowMs: 15 * 60 * 1000,
  maxRequests: 5,
  identifier: 'login',
};

export const apiRateLimit: RateLimitConfig = {
  windowMs: 60 * 1000,
  maxRequests: 60,
};

export const formSubmitRateLimit: RateLimitConfig = {
  windowMs: 60 * 1000,
  maxRequests: 10,
};