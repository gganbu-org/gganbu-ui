import { isBrowser, localStorage } from '@danji/components/utils';
import { getMatches } from '@danji/components/hooks';

import {
  COLOR_SCHEME,
  COLOR_SCHEME_SYSTEM,
  LOCAL_STORAGE_KEY,
  PREFER_DARK_QUERY,
} from './colorScheme.constants';
import { ColorScheme, ColorSchemeWithSystem } from './colorScheme.types';

interface StorageManager {
  get(init: ColorSchemeWithSystem): ColorSchemeWithSystem;
  set(value: ColorSchemeWithSystem): void;
}

const createBrowserStorageManager = (key: string): StorageManager => {
  const browserStorage = localStorage;

  return {
    get(init) {
      if (!isBrowser) return init;

      return browserStorage.get<ColorSchemeWithSystem>(key) || init;
    },
    set<T>(value: T) {
      if (!isBrowser) return;

      browserStorage.set(key, value);
    },
  };
};

export const getSystemScheme = () =>
  getMatches(PREFER_DARK_QUERY) ? COLOR_SCHEME.DARK : COLOR_SCHEME.LIGHT;

export const isSystemScheme = (
  colorScheme: ColorSchemeWithSystem,
): colorScheme is 'system' => colorScheme === COLOR_SCHEME_SYSTEM;

export const isDarkScheme = (colorScheme: ColorScheme): colorScheme is 'dark' =>
  colorScheme === COLOR_SCHEME.DARK;

export const storageManager = createBrowserStorageManager(LOCAL_STORAGE_KEY);

export const getColorScheme = (
  storageManger: StorageManager,
  init: ColorSchemeWithSystem,
) => storageManger.get(init);

export const setDataset = (colorScheme: ColorScheme) => {
  if (!isBrowser) return;
  document.documentElement.setAttribute('data-theme', colorScheme);
};
