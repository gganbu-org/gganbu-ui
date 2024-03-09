import { DJ_DEFAULT_THEME } from '@danji/components';
import { customTheme } from '@danji/styled';
import { css } from '@danji/css';

const theme = customTheme(DJ_DEFAULT_THEME);
const { colors } = DJ_DEFAULT_THEME;

describe('css', () => {
  it('should be return same value if it is not in the theme', () => {
    const result = css({
      color: 'gray',
    })(theme);

    expect(result).toEqual({
      color: 'gray',
    });
  });

  it('should convert color to custom property', () => {
    const result = css({
      color: 'gray.100',
    })(theme);

    expect(result).toEqual({
      color: 'var(--dj-colors-gray-100)',
    });
  });

  it('should convert typography to custom property', () => {
    const result = css({
      fontSize: 'sm',
      fontWeight: 'normal',
      lineHeight: 'sm',
    })(theme);

    expect(result).toEqual({
      fontSize: 'var(--dj-fontSize-sm)',
      fontWeight: 'var(--dj-fontWeight-normal)',
      lineHeight: 'var(--dj-lineHeight-sm)',
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

  it('should convert functional arguments to value', () => {
    const result = css((t: any) => ({
      color: t.colors.gray['100'],
    }))(theme);

    expect(result).toEqual({
      color: colors.gray[100],
    });
  });

  it('should convert functional vales to value', () => {
    const result = css({
      color: (t: any) => t.colors.gray['100'],
    })(theme);

    expect(result).toEqual({
      color: colors.gray[100],
    });
  });
});
