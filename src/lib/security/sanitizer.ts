import DOMPurify from 'isomorphic-dompurify';

export interface SanitizeOptions {
  allowedTags?: string[];
  allowedAttributes?: string[];
  allowLinks?: boolean;
  maxLength?: number;
}

export class Sanitizer {
  static sanitizeText(input: string, options: SanitizeOptions = {}): string {
    if (!input) return '';

    let sanitized = options.maxLength ? input.slice(0, options.maxLength) : input;

    sanitized = DOMPurify.sanitize(sanitized, {
      ALLOWED_TAGS: options.allowedTags || [],
      ALLOWED_ATTR: options.allowedAttributes || [],
    });

    sanitized = sanitized
      .replace(/javascript:/gi, '')
      .replace(/on\w+\s*=/gi, '')
      .replace(/<script/gi, '')
      .replace(/<\/script/gi, '');

    return sanitized.trim();
  }

  static sanitizeHTML(html: string, options: SanitizeOptions = {}): string {
    const defaultTags = ['p', 'br', 'strong', 'em', 'b', 'i'];
    const defaultAttrs = options.allowLinks ? ['href', 'target', 'rel'] : [];

    if (options.allowLinks) {
      defaultTags.push('a');
    }

    return DOMPurify.sanitize(html, {
      ALLOWED_TAGS: options.allowedTags || defaultTags,
      ALLOWED_ATTR: options.allowedAttributes || defaultAttrs,
      ALLOW_DATA_ATTR: false,
      ADD_ATTR: options.allowLinks ? ['target', 'rel'] : [],
      ADD_TAGS: [],
    });
  }

  static sanitizeJSON(input: any): any {
    if (typeof input === 'string') {
      return this.sanitizeText(input);
    }

    if (Array.isArray(input)) {
      return input.map(item => this.sanitizeJSON(item));
    }

    if (typeof input === 'object' && input !== null) {
      const sanitized: any = {};
      for (const [key, value] of Object.entries(input)) {
        const sanitizedKey = this.sanitizeText(key, { maxLength: 100 });
        sanitized[sanitizedKey] = this.sanitizeJSON(value);
      }
      return sanitized;
    }

    return input;
  }

  static escapeHTML(str: string): string {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
}