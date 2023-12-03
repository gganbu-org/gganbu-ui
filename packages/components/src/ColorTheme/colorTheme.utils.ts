import { isBrowser, localStorage } from '@danji/components/src/utils';
import { getMatches } from '@danji/components/src/hooks';

import {
  COLOR_THEME,
  COLOR_THEME_SYSTEM,
  LOCAL_STORAGE_KEY,
  PREFER_DARK_QUERY,
} from './colorTheme.constants';
import { ColorTheme, ColorThemeWithSystem } from './colorTheme.types';

interface StorageManager {
  get(init: ColorThemeWithSystem): ColorThemeWithSystem;
  set(value: ColorThemeWithSystem): void;
}

const createBrowserStorageManager = (key: string): StorageManager => {
  const browserStorage = localStorage;

  return {
    get(init) {
      if (!isBrowser) return init;

      return browserStorage.get<ColorThemeWithSystem>(key) || init;
    },
    set<T>(value: T) {
      if (!isBrowser) return;

      browserStorage.set(key, value);
    },
  };
};

export const getSystemTheme = () =>
  getMatches(PREFER_DARK_QUERY) ? COLOR_THEME.DARK : COLOR_THEME.LIGHT;

export const isSystemTheme = (theme: ColorThemeWithSystem) =>
  theme === COLOR_THEME_SYSTEM;

export const isDarkTheme = (theme: ColorTheme) => theme === COLOR_THEME.DARK;

export const storageManager = createBrowserStorageManager(LOCAL_STORAGE_KEY);

export const getColorTheme = (
  storageManger: StorageManager,
  init: ColorThemeWithSystem,
) => storageManger.get(init);
