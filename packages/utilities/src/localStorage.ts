export const localStorage = {
  get: <T>(key: string): T | null => {
    try {
      return JSON.parse(window?.localStorage.getItem(key) || '');
    } catch (err) {
      return null;
    }
  },
  set: <T>(key: string, value: T): void => {
    try {
      window?.localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error('Error setting data in localStorage:', err);
    }
  },
  remove: (key: string): void => {
    window?.localStorage.removeItem(key);
  },
};

export const ddddaaaa = {};
