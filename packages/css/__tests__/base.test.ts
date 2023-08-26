import { DJ_DEFAULT_THEME, customTheme } from '@danji/styled';
import { css } from '../src';

const theme = customTheme(DJ_DEFAULT_THEME);

describe('css', () => {
  it('should be return same value if it is not in the theme', () => {
    const result = css({
      color: 'gray',
    })(theme);

    expect(result).toEqual({
      color: 'gray',
    });
  });

  it('should convert value to custom property', () => {
    const result = css({
      color: 'gray.100',
    })(theme);

    expect(result).toEqual({
      color: 'var(--dj-colors-gray-100)',
    });
  });

  it('should convert aliases to css property', () => {
    const result = css({
      bg: '#fff',
      w: '0.25rem',
    })(theme);

    expect(result).toEqual({
      backgroundColor: '#fff',
      width: '0.25rem',
    });
  });

  it('should convert nested object to style object', () => {
    const result = css({
      bg: '#fff',
      '&:hover': {
        bg: 'gray.100',
      },
    })(theme);

    expect(result).toEqual({
      backgroundColor: '#fff',
      '&:hover': {
        backgroundColor: 'var(--dj-colors-gray-100)',
      },
    });
  });
});
