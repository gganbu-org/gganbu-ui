export const systemProperties = {
  display: ['flex', 'inline-flex'],
  position: ['absolute'],
  alignSelf: ['center'],
  flexShrink: ['0'],
  opacity: ['0', '1'],
  marginLeft: ['1', '2', '3'],
  marginRight: ['1', '2', '3'],
  srOnly: [true],
} as const;

export type SystemProperties = typeof systemProperties;
