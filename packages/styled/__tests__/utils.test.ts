import {
  COLORS,
  getColor,
  getRandomColor,
  isArray,
  isObject,
} from '../src/utils';

describe('getColor', () => {
  it('should return the correct color based on index', () => {
    expect(getColor(0)).toBe('#78858B');
    expect(getColor(1)).toBe('#D95030');
    expect(getColor(2)).toBe('#EA899A');
    expect(getColor(3)).toBe('#78858B');
  });

  it('should handle negative index correctly', () => {
    expect(getColor(-1)).toBe('#EA899A');
  });
});

describe('getRandomColor', () => {
  it('should return a random color from the COLORS array', () => {
    const randomColor = getRandomColor();
    expect(COLORS).toContain(randomColor);
  });
});

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
