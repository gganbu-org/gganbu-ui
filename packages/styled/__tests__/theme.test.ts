import {
  toCustomProperties,
  getValueByPath,
  joinWithHyphen,
  isObject,
  createCssVars,
} from '@danji/styled';

describe('toCustomProperties', () => {
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
    const customProperties = toCustomProperties(colors);

    expect(customProperties).toEqual({
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

    const customProperties = toCustomProperties(nestedColors);

    expect(customProperties).toEqual({
      'primary-blue': '#007bff',
      'primary-red': '#dc3545',
      'secondary-green': '#28a745',
      'secondary-gray-100': '#f8f9fa',
      'secondary-gray-200': '#e9ecef',
    });
  });

  it('should handle prefix', () => {
    const customProperties = toCustomProperties(
      colors,
      joinWithHyphen('dj', 'colors'),
    );

    expect(customProperties).toEqual({
      'dj-colors-gray-100': '#f8f9fa',
      'dj-colors-gray-200': '#e9ecef',
      'dj-colors-gray-300': '#dee2e6',
      'dj-colors-gray-400': '#ced4da',
      'dj-colors-gray-500': '#adb5bd',
      'dj-colors-gray-600': '#6c757d',
      'dj-colors-gray-700': '#495057',
      'dj-colors-gray-800': '#343a40',
      'dj-colors-gray-900': '#212529',
      'dj-colors-blue': '#007bff',
      'dj-colors-red': '#dc3545',
      'dj-colors-green': '#28a745',
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

    const customProperties = toCustomProperties(
      delimiterCase,
      'colors',
      delimiter,
    );

    expect(customProperties).toEqual({
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

    const customProperties = toCustomProperties(haltCase, 'colors', delimiter, {
      halt: (value) => isObject(value),
    });

    expect(customProperties).toEqual({
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
          "--dj-colors-gray-100": "#f1f1f2",
          "--dj-colors-gray-200": "#e6e7e9",
          "--dj-colors-gray-300": "#d2d4d7",
          "--dj-colors-gray-400": "#a9adb2",
          "--dj-colors-gray-50": "#f9fafa",
          "--dj-colors-gray-500": "#797f88",
          "--dj-colors-gray-600": "#4d5560",
          "--dj-colors-gray-700": "#2e3744",
          "--dj-colors-gray-800": "#19202b",
          "--dj-colors-gray-900": "#141a23",
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
            "--dj-colors-background-primary": "var(--dj-colors-blue)",
            "--dj-colors-text-primary": "white",
          },
          "--dj-colors-background-primary": "var(--dj-colors-gray-50)",
          "--dj-colors-blue": "#007bff",
          "--dj-colors-gray-50": "#f9fafa",
          "--dj-colors-text-primary": "black",
        }
      `);
    });
  });
});
