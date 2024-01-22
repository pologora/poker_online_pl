export const theme = {
  light: {
    primary: '#2f41db',
    secondary: '#48509c',
    secondaryDark: '#41445c',
    important: '#dbb52e',
    importantDark: '#867949',
    error: 'red',

    bgHome: '#ffffff',
    bgRules: '#5EA3EC',
    bgCards: '#F64444',
    bgPromotions: '#FFB400',

    black: '#262730',
    black75: '#262730bf',
    black50: '#26273080',
    black25: '#26273040',
    black10: '#2627301a',
    black5: '#2627300d',
    white: '#f5f5f5',
    textLight: 'var(--white)',
    textDark: 'var(--black)',
  },
};

export type ThemeVariant = keyof typeof theme;
export type Theme = typeof theme.light;

export function setCssVariables(theme: Theme) {
  for (const value in theme) {
    const key = value as keyof Theme;
    document.documentElement.style.setProperty(`--${value}`, theme[key]);
  }
}
