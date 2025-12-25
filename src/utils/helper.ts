import { getEnvOptional } from '@/lib/env';

export const getBaseUrl = (): string => {
  // Priority 1: Explicitly set app URL
  const appUrl = getEnvOptional('NEXT_PUBLIC_APP_URL');
  if (appUrl) {
    return appUrl;
  }

  // Priority 2: Vercel production URL
  const vercelEnv = getEnvOptional('VERCEL_ENV');
  const vercelProductionUrl = getEnvOptional('VERCEL_PROJECT_PRODUCTION_URL');
  if (vercelEnv === 'production' && vercelProductionUrl) {
    return `https://${vercelProductionUrl}`;
  }

  // Priority 3: Vercel preview/development URL
  const vercelUrl = getEnvOptional('VERCEL_URL');
  if (vercelUrl) {
    return `https://${vercelUrl}`;
  }

  // Fallback: localhost
  return 'http://localhost:3000';
};

/**
 * Safely get value from localStorage (client-side only)
 */
export function getFromLocalStorage(key: string): string | null {
  if (typeof window === 'undefined') {
    return null;
  }
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

/**
 * Safely set value to localStorage (client-side only)
 */
export function setToLocalStorage(key: string, value: string): boolean {
  if (typeof window === 'undefined') {
    return false;
  }
  try {
    window.localStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}

/**
 * Safely remove value from localStorage (client-side only)
 */
export function removeFromLocalStorage(key: string): boolean {
  if (typeof window === 'undefined') {
    return false;
  }
  try {
    window.localStorage.removeItem(key);
    return true;
  } catch {
    return false;
  }
}

/**
 * Safely get value from sessionStorage (client-side only)
 */
export function getFromSessionStorage(key: string): string | null {
  if (typeof window === 'undefined') {
    return null;
  }
  try {
    return window.sessionStorage.getItem(key);
  } catch {
    return null;
  }
}

/**
 * Safely set value to sessionStorage (client-side only)
 */
export function setToSessionStorage(key: string, value: string): boolean {
  if (typeof window === 'undefined') {
    return false;
  }
  try {
    window.sessionStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}
