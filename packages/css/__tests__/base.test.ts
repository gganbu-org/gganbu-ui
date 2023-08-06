import { colors } from '@danji/styled';
import { css } from '../src';

const theme = {
  colors,
};

describe('css', () => {
  it('should be return same value if it is not in the theme', () => {
    const result = css({
      color: '#fff',
    })(theme);

    expect(result).toEqual({
      color: '#fff',
    });
  });

  it('should convert value to custom variable', () => {
    const result = css({
      color: 'gray.100',
    })(theme);

    expect(result).toEqual({
      color: colors.gray[100],
    });
  });

  it('should convert aliases to css property', () => {
    const result = css({
      bg: 'gray.100',
    })(theme);

    expect(result).toEqual({
      backgroundColor: colors.gray[100],
    });
  });
});
