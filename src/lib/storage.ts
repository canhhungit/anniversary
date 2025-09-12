export const storage = {
  get: <T>(key: string): T | null => {
    if (typeof window === 'undefined') return null;
    const value = localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : null;
  },
  set: (key: string, value: unknown) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(key, JSON.stringify(value));
  },
  remove: (key: string) => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(key);
  },
};
