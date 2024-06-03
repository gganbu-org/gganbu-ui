import { isArray, isObject, splitBySeparator } from '@gganbu-org/utilities';

describe('isArray', () => {
  it('should return true if the value is an array', () => {
    expect(isArray([])).toBe(true);
    expect(isArray([1, 2, 3])).toBe(true);
    expect(isArray(['a', 'b', 'c'])).toBe(true);
  });

  it('should return false if the value is not an array', () => {
    expect(isArray(null)).toBe(false);
    expect(isArray(undefined)).toBe(false);
    expect(isArray('string')).toBe(false);
    expect(isArray(123)).toBe(false);
    expect(isArray({})).toBe(false);
  });
});

describe('isObject', () => {
  it('should return true if the value is an object', () => {
    expect(isObject({})).toBe(true);
    expect(isObject({ name: 'John', age: 30 })).toBe(true);
  });

  it('should return false if the value is not an object', () => {
    expect(isObject(null)).toBe(false);
    expect(isObject(undefined)).toBe(false);
    expect(isObject([])).toBe(false);
    expect(isObject('string')).toBe(false);
    expect(isObject(123)).toBe(false);
  });
});

describe('splitBySeparator', () => {
  it('should split a string by the separator', () => {
    const input = 'apple,banana,orange';
    const separator = ',';

    expect(splitBySeparator(input, separator)).toEqual([
      'apple',
      'banana',
      'orange',
    ]);
  });

  it('should handle empty string and non-empty separator', () => {
    const input = '';
    const separator = ',';

    expect(splitBySeparator(input, separator)).toEqual(['']);
  });

  it('should handle empty string and empty separator', () => {
    const input = '';
    const separator = '';

    expect(splitBySeparator(input, separator)).toEqual([]);
  });
});
