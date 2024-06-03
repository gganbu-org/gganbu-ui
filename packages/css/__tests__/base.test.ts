import { createCssVars, css, GGANBU_DEFAULT_THEME } from '@gganbu-org/css';

const theme = Object.assign(GGANBU_DEFAULT_THEME, {
  cssVars: createCssVars(GGANBU_DEFAULT_THEME),
});

describe('css', () => {
  const { colors } = GGANBU_DEFAULT_THEME;

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
      color: 'var(--gb-colors-gray-100)',
    });
  });

  it('should convert typography to custom property', () => {
    const result = css({
      fontSize: 'sm',
      fontWeight: 'normal',
      lineHeight: 'sm',
    })(theme);

    expect(result).toEqual({
      fontSize: 'var(--gb-fontSizes-sm)',
      fontWeight: 'var(--gb-fontWeights-normal)',
      lineHeight: 'var(--gb-lineHeights-sm)',
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

  it('should convert utility to value', () => {
    const result = css({
      srOnly: true,
    })(theme);

    expect(result).toMatchInlineSnapshot(`
      {
        "borderWidth": 0,
        "clip": "rect(0, 0, 0, 0)",
        "height": "1px",
        "margin": "-1px",
        "overflow": "hidden",
        "padding": 0,
        "position": "absolute",
        "whiteSpace": "nowrap",
        "width": "1px",
      }
    `);
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
        backgroundColor: 'var(--gb-colors-gray-100)',
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
