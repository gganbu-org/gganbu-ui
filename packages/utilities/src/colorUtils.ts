export const getColorAlpha = (color: string, opacity: number) => {
  const transparency = Math.round(Math.min(Math.max(opacity ?? 1, 0), 1) * 255);

  return `${color}${transparency.toString(16).toUpperCase()}`;
};

export const isHexColor = (hex: string) => {
  const reg = /^#[0-9A-F]{6}[0-9a-f]{0,2}$/i;

  return typeof hex === 'string' && reg.test(hex);
};
