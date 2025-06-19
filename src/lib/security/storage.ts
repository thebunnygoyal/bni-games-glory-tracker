const STORAGE_PREFIX = 'bni_secure_';

interface StorageOptions {
  encrypt?: boolean;
  expiresIn?: number;
}

export async function setSecureItem(
  key: string,
  value: any,
  options: StorageOptions = {}
): Promise<void> {
  const storageKey = STORAGE_PREFIX + key;
  const data = {
    value,
    timestamp: Date.now(),
    expiresAt: options.expiresIn ? Date.now() + options.expiresIn : null,
  };
  
  const stringData = JSON.stringify(data);
  
  if (typeof window !== 'undefined') {
    sessionStorage.setItem(storageKey, stringData);
    localStorage.setItem(storageKey, stringData);
  }
}

export async function getSecureItem(key: string): Promise<any> {
  const storageKey = STORAGE_PREFIX + key;
  
  if (typeof window === 'undefined') {
    return null;
  }
  
  let rawData = sessionStorage.getItem(storageKey) || localStorage.getItem(storageKey);
  
  if (!rawData) {
    return null;
  }
  
  try {
    const data = JSON.parse(rawData);
    
    if (data.expiresAt && data.expiresAt < Date.now()) {
      removeSecureItem(key);
      return null;
    }
    
    return data.value;
  } catch {
    return null;
  }
}

export async function removeSecureItem(key: string): Promise<void> {
  const storageKey = STORAGE_PREFIX + key;
  
  if (typeof window !== 'undefined') {
    sessionStorage.removeItem(storageKey);
    localStorage.removeItem(storageKey);
  }
}

export function clearAllSecureStorage(): void {
  if (typeof window !== 'undefined') {
    const keysToRemove: string[] = [];
    
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith(STORAGE_PREFIX)) {
        keysToRemove.push(key);
      }
    }
    
    keysToRemove.forEach(key => {
      localStorage.removeItem(key);
      sessionStorage.removeItem(key);
    });
  }
}