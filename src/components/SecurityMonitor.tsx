import React, { useEffect, useState } from 'react';
import { useAuth } from '../lib/auth/auth.context';

export function SecurityMonitor() {
  const { user } = useAuth();
  const [suspiciousActivity, setSuspiciousActivity] = useState(false);

  useEffect(() => {
    if (!user) return;

    let devToolsOpen = false;
    const threshold = 160;

    const detectDevTools = () => {
      if (
        window.outerHeight - window.innerHeight > threshold ||
        window.outerWidth - window.innerWidth > threshold
      ) {
        if (!devToolsOpen && process.env.NODE_ENV === 'production') {
          devToolsOpen = true;
          setSuspiciousActivity(true);
          console.warn('Developer tools detected');
        }
      } else {
        devToolsOpen = false;
      }
    };

    const interval = setInterval(detectDevTools, 500);

    const originalLog = console.log;
    console.log = function(...args) {
      if (process.env.NODE_ENV === 'production') {
        setSuspiciousActivity(true);
      }
      originalLog.apply(console, args);
    };

    return () => {
      clearInterval(interval);
      console.log = originalLog;
    };
  }, [user]);

  useEffect(() => {
    if (suspiciousActivity && user) {
      console.warn(`Suspicious activity detected for user: ${user.email}`);
    }
  }, [suspiciousActivity, user]);

  return null;
}