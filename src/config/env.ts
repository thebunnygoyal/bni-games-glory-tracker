// Environment configuration with dynamic support for Azure

interface AppConfig {
  environment: 'development' | 'staging' | 'production';
  apiUrl: string;
  authDomain: string;
  appName: string;
  appVersion: string;
  features: {
    enableAnalytics: boolean;
    enableErrorReporting: boolean;
    enablePushNotifications: boolean;
  };
}

// Helper function to get environment variable with fallback
function getEnvVar(key: string, fallback: string = ''): string {
  return import.meta.env[key] || fallback;
}

// Helper function to parse boolean environment variables
function getEnvBool(key: string, fallback: boolean = false): boolean {
  const value = getEnvVar(key);
  if (!value) return fallback;
  return value.toLowerCase() === 'true';
}

export const config: AppConfig = {
  environment: (getEnvVar('VITE_ENVIRONMENT', 'development') as AppConfig['environment']),
  apiUrl: getEnvVar('VITE_API_URL', 'http://localhost:3000/api'),
  authDomain: getEnvVar('VITE_AUTH_DOMAIN', 'localhost'),
  appName: getEnvVar('VITE_APP_NAME', 'BNI Games Glory Tracker'),
  appVersion: getEnvVar('VITE_APP_VERSION', '2.0.0'),
  features: {
    enableAnalytics: getEnvBool('VITE_ENABLE_ANALYTICS', false),
    enableErrorReporting: getEnvBool('VITE_ENABLE_ERROR_REPORTING', false),
    enablePushNotifications: getEnvBool('VITE_ENABLE_PUSH_NOTIFICATIONS', false),
  },
};

// Validate configuration in development
if (config.environment === 'development') {
  console.log('App Configuration:', config);
}

// Export individual config items for convenience
export const { environment, apiUrl, authDomain, appName, appVersion, features } = config;