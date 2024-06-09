import { joinWithHyphen, isObject, getValueByPath } from '@gganbu-org/utils';
import { createCssVars, flattenToTokens } from '../src/cssVars';

describe('flattenToTokens', () => {
  const colors = {
    gray: {
      100: '#f8f9fa',
      200: '#e9ecef',
      300: '#dee2e6',
      400: '#ced4da',
      500: '#adb5bd',
      600: '#6c757d',
      700: '#495057',
      800: '#343a40',
      900: '#212529',
    },
    blue: '#007bff',
    red: '#dc3545',
    green: '#28a745',
  };

  it('should convert object to custom properties format', () => {
    const tokens = flattenToTokens(colors);

    expect(tokens).toEqual({
      'gray-100': '#f8f9fa',
      'gray-200': '#e9ecef',
      'gray-300': '#dee2e6',
      'gray-400': '#ced4da',
      'gray-500': '#adb5bd',
      'gray-600': '#6c757d',
      'gray-700': '#495057',
      'gray-800': '#343a40',
      'gray-900': '#212529',
      blue: '#007bff',
      red: '#dc3545',
      green: '#28a745',
    });
  });

  it('should handle nested objects', () => {
    const nestedColors = {
      primary: {
        blue: '#007bff',
        red: '#dc3545',
      },
      secondary: {
        green: '#28a745',
        gray: {
          100: '#f8f9fa',
          200: '#e9ecef',
        },
      },
    };

    const tokens = flattenToTokens(nestedColors);

    expect(tokens).toEqual({
      'primary-blue': '#007bff',
      'primary-red': '#dc3545',
      'secondary-green': '#28a745',
      'secondary-gray-100': '#f8f9fa',
      'secondary-gray-200': '#e9ecef',
    });
  });

  it('should handle prefix', () => {
    const tokens = flattenToTokens(colors, joinWithHyphen('gb', 'colors'));

    expect(tokens).toEqual({
      'gb-colors-gray-100': '#f8f9fa',
      'gb-colors-gray-200': '#e9ecef',
      'gb-colors-gray-300': '#dee2e6',
      'gb-colors-gray-400': '#ced4da',
      'gb-colors-gray-500': '#adb5bd',
      'gb-colors-gray-600': '#6c757d',
      'gb-colors-gray-700': '#495057',
      'gb-colors-gray-800': '#343a40',
      'gb-colors-gray-900': '#212529',
      'gb-colors-blue': '#007bff',
      'gb-colors-red': '#dc3545',
      'gb-colors-green': '#28a745',
    });
  });

  it('should handle delimiter', () => {
    const delimiter = '.';
    const delimiterCase = {
      primary: {
        blue: '#007bff',
        red: '#dc3545',
      },
    };

    const tokens = flattenToTokens(delimiterCase, 'colors', delimiter);

    expect(tokens).toEqual({
      'colors.primary.blue': '#007bff',
      'colors.primary.red': '#dc3545',
    });
  });

  it('should handle halt condition', () => {
    const delimiter = '.';
    const haltCase = {
      primary: {
        blue: '#007bff',
        red: '#dc3545',
      },
    };

    const tokens = flattenToTokens(haltCase, 'colors', delimiter, {
      halt: (value) => isObject(value),
    });

    expect(tokens).toEqual({
      'colors.primary': {
        blue: '#007bff',
        red: '#dc3545',
      },
    });
  });
});

describe('getValueByPath', () => {
  const colors = {
    gray: {
      100: '#f8f9fa',
      200: '#e9ecef',
      300: '#dee2e6',
      400: '#ced4da',
      500: '#adb5bd',
      600: '#6c757d',
      700: '#495057',
      800: '#343a40',
      900: '#212529',
    },
    blue: '#007bff',
    red: '#dc3545',
    green: '#28a745',
  };

  it('should returned value for a property that exists', () => {
    const testCases = [
      { key: 'gray.100', expected: colors.gray['100'] },
      { key: 'gray.200', expected: colors.gray['200'] },
      { key: 'blue', expected: colors.blue },
    ];

    testCases.forEach(({ key, expected }) => {
      const result = getValueByPath(colors, key);
      expect(result).toEqual(expected);
    });
  });

  it('should returned undefined for a property that not exists', () => {
    const testCases = [
      { key: 'undefined', expected: undefined },
      { key: 'nope!!', expected: undefined },
      { key: '', expected: undefined },
      { key: 'gray.1004', expected: undefined },
      { key: 'gray.', expected: undefined },
    ];

    testCases.forEach(({ key, expected }) => {
      const result = getValueByPath(colors, key);
      expect(result).toEqual(expected);
    });
  });

  it('should returned fallback for a property that not exists', () => {
    const testCases = [
      { key: '#fff', fallback: '#fff', expected: '#fff' },
      { key: 'gray.', fallback: {}, expected: {} },
    ];

    testCases.forEach(({ key, expected, fallback }) => {
      const result = getValueByPath(colors, key, fallback);
      expect(result).toEqual(expected);
    });
  });

  describe('cssVars', () => {
    it('should convert tokens to cssVars', () => {
      const theme = {
        colors: {
          gray: {
            '50': '#f9fafa',
            '100': '#f1f1f2',
            '200': '#e6e7e9',
            '300': '#d2d4d7',
            '400': '#a9adb2',
            '500': '#797f88',
            '600': '#4d5560',
            '700': '#2e3744',
            '800': '#19202b',
            '900': '#141a23',
          },
        },
      };

      const result = createCssVars(theme);
      expect(result).toMatchInlineSnapshot(`
        {
          "--gb-colors-gray-100": "#f1f1f2",
          "--gb-colors-gray-200": "#e6e7e9",
          "--gb-colors-gray-300": "#d2d4d7",
          "--gb-colors-gray-400": "#a9adb2",
          "--gb-colors-gray-50": "#f9fafa",
          "--gb-colors-gray-500": "#797f88",
          "--gb-colors-gray-600": "#4d5560",
          "--gb-colors-gray-700": "#2e3744",
          "--gb-colors-gray-800": "#19202b",
          "--gb-colors-gray-900": "#141a23",
        }
      `);
    });

    it('should convert semantic tokens to cssVars', () => {
      const theme = {
        colors: {
          gray: {
            '50': '#f9fafa',
          },
          blue: '#007bff',
        },
        semanticTokens: {
          text: {
            primary: {
              _light: 'black',
              _dark: 'white',
            },
          },
          background: {
            primary: {
              _light: 'gray.50',
              _dark: 'blue',
            },
          },
        },
      };

      const result = createCssVars(theme);

      expect(result).toMatchInlineSnapshot(`
        {
          "&[data-theme=dark]": {
            "--gb-colors-background-primary": "var(--gb-colors-blue)",
            "--gb-colors-text-primary": "white",
          },
          "--gb-colors-background-primary": "var(--gb-colors-gray-50)",
          "--gb-colors-blue": "#007bff",
          "--gb-colors-gray-50": "#f9fafa",
          "--gb-colors-text-primary": "black",
        }
      `);
    });
  });
});
