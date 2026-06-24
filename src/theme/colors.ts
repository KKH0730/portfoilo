const C = {
  bg: '#F8F9FF',
  bgAlt: '#EEF0FB',
  card: '#FFFFFF',
  cardAlt: '#F3F4FF',
  cardBorder: '#E2E4F0',
  accent: '#4F46E5',
  accentLight: '#6D65F5',
  accentDim: 'rgba(79, 70, 229, 0.08)',
  teal: '#0D9488',
  tealDim: 'rgba(13, 148, 136, 0.08)',
  orange: '#EA580C',
  orangeDim: 'rgba(234, 88, 12, 0.08)',
  text: '#0F0F1A',
  textSub: '#4B4D6A',
  textMuted: '#9496B0',
  border: '#E2E4F0',
  borderLight: '#ECEEF8',
  white: '#FFFFFF',
  shadow: 'rgba(79, 70, 229, 0.08)',
} as const;

export type Colors = typeof C;
export default C;
