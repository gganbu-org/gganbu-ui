import { join } from '@danji/styled/utils';
import { toCustomProperties, getValueByPath } from '@danji/styled/theme';

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
    const customProperties = toCustomProperties(colors, join('dj', 'colors'));

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
});
