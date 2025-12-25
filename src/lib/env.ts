/**
 * Gets environment variable value with optional fallback
 * @param key - Environment variable name
 * @param fallback - Optional fallback value
 * @returns The environment variable value or fallback
 * @throws Error if variable is not set and no fallback provided
 */
export function getEnv(key: string, fallback?: string): string {
  const value = process.env[key] ?? fallback;
  if (value === undefined) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
}

/**
 * Gets environment variable value, returns undefined if not set
 * @param key - Environment variable name
 * @returns The environment variable value or undefined
 */
export function getEnvOptional(key: string): string | undefined {
  return process.env[key];
}

/**
 * Checks if we're running in production environment
 */
export function isProduction(): boolean {
  return process.env.NODE_ENV === 'production';
}

/**
 * Checks if we're running in development environment
 */
export function isDevelopment(): boolean {
  return process.env.NODE_ENV === 'development';
}
