
// Security utilities and configurations
export const SECURITY_CONFIG = {
  // Content Security Policy directives
  CSP_DIRECTIVES: {
    'default-src': ["'self'"],
    'script-src': ["'self'", "'unsafe-inline'", 'https://trusted-cdn.com'],
    'style-src': ["'self'", "'unsafe-inline'"],
    'img-src': ["'self'", 'data:', 'https:'],
    'font-src': ["'self'", 'https://fonts.gstatic.com'],
    'connect-src': ["'self'"],
    'frame-ancestors': ["'none'"],
    'form-action': ["'self'"],
    'base-uri': ["'self'"],
    'object-src': ["'none'"]
  },

  // Rate limiting configuration
  RATE_LIMITS: {
    FORM_SUBMISSION: {
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 5 // limit each IP to 5 requests per windowMs
    },
    LOGIN_ATTEMPTS: {
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 5 // limit login attempts
    }
  }
};

// Rate limiter utility for client-side
class RateLimiter {
  private attempts: Map<string, { count: number; resetTime: number }> = new Map();

  isAllowed(key: string, maxAttempts: number, windowMs: number): boolean {
    const now = Date.now();
    const attempt = this.attempts.get(key);

    if (!attempt || now > attempt.resetTime) {
      this.attempts.set(key, { count: 1, resetTime: now + windowMs });
      return true;
    }

    if (attempt.count >= maxAttempts) {
      return false;
    }

    attempt.count++;
    return true;
  }

  getRemainingTime(key: string): number {
    const attempt = this.attempts.get(key);
    if (!attempt) return 0;
    
    const now = Date.now();
    return Math.max(0, attempt.resetTime - now);
  }
}

export const rateLimiter = new RateLimiter();

// URL validation utility
export const isValidUrl = (url: string): boolean => {
  try {
    const parsedUrl = new URL(url);
    // Only allow http and https protocols
    return ['http:', 'https:'].includes(parsedUrl.protocol);
  } catch {
    return false;
  }
};

// Phone number validation for WhatsApp links
export const isValidPhoneNumber = (phone: string): boolean => {
  // Remove all non-digit characters
  const cleanPhone = phone.replace(/\D/g, '');
  // Should be between 10-15 digits
  return cleanPhone.length >= 10 && cleanPhone.length <= 15;
};

// Safe external link opener
export const openSafeLink = (url: string): void => {
  if (!isValidUrl(url)) {
    console.error('Invalid URL provided:', url);
    return;
  }

  // Open in new tab with security attributes
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow) {
    newWindow.opener = null;
  }
};
