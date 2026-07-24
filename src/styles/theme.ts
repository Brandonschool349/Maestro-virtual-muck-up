export const theme = {
  colors: {
    brand: {
      primary: '#2563EA',
      green: '#10B982',
    },
    background: {
      canvas: '#F8F9FB',
      base: '#FFFFFF',
      elevated: '#F6F6FE',
      muted: '#E1E8F0',
      overlay: 'rgba(15, 23, 42, 0.06)',
    },
    surface: {
      primary: '#FFFFFF',
      secondary: '#F8F9FB',
      tertiary: '#E1E8F0',
      accent: '#F6F6FE',
    },
    text: {
      primary: '#0F172A',
      secondary: '#334155',
      tertiary: '#64748B',
      inverse: '#FFFFFF',
      muted: '#94A3B8',
    },
    border: {
      subtle: '#E2E8F0',
      strong: '#CBD5E1',
      accent: '#C7D2FE',
      focus: '#2563EA',
    },
    state: {
    success:'#10B982',
    warning:'#F59E0B',
    error:'#EF4444',
    info:'#2563EA',
    }
  },
  typography: {
    fontFamily: {
      heading: '"Times New Roman", serif',
      body: '"Times New Roman", serif',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.7,
    },
  },
  borderRadius: {
    sm: '0.375rem',
    md: '0.625rem',
    lg: '0.875rem',
    xl: '1.25rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px rgba(15, 23, 42, 0.06)',
    md: '0 10px 30px rgba(15, 23, 42, 0.08)',
    lg: '0 20px 45px rgba(15, 23, 42, 0.12)',
    focus: '0 0 0 3px rgba(24, 0, 173, 0.2)',
  },
  spacingScale: {
    0: '0px',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
  },
  zIndex: {
    navbar: 1000,
    dropdown: 1100,
    modal: 1200,
    toast: 1300,
  },
  animationDurations: {
    fast: '150ms',
    base: '220ms',
    slow: '350ms',
    slower: '500ms',
  },
  transitionPresets: {
    default: 'all 220ms cubic-bezier(0.2, 0.8, 0.2, 1)',
    smooth: 'transform 220ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 220ms cubic-bezier(0.2, 0.8, 0.2, 1)',
    enter: 'all 350ms cubic-bezier(0.16, 1, 0.3, 1)',
    exit: 'all 200ms cubic-bezier(0.4, 0, 1, 1)',
  },
} as const;

export type Theme = typeof theme;

export default theme;
