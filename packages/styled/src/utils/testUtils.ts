export const COLORS = ['#78858B', '#D95030', '#EA899A'];

export const getColor = (index: number) => {
  const normalizedIndex =
    index >= 0 ? index : COLORS.length + (index % COLORS.length);
  return COLORS[normalizedIndex % COLORS.length];
};

export const getRandomColor = () =>
  COLORS[Math.floor(Math.random() * COLORS.length)];
