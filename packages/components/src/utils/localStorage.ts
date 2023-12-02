const storage = {
  get: <T>(key: string): T | null => {
    try {
      return JSON.parse(localStorage.getItem(key) || '');
    } catch (err) {
      return null;
    }
  },
  set: <T>(key: string, value: T): void => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error('Error setting data in localStorage:', err);
    }
  },
  remove: (key: string): void => {
    localStorage.removeItem(key);
  },
};

export default storage;
