import { COLORS, getColor, getRandomColor } from '../src/utils';

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