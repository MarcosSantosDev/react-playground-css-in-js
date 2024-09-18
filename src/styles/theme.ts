import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: '#605BFF',
    secondary: '#CDCDCD',
    background: '#FDFDFD',
    surface: '#F1F4FF',
    scrollbarTrack: '#f1f1f1', // Cor de fundo do track da scrollbar
    scrollbarThumb: '#888', // Cor do thumb da scrollbar
    scrollbarThumbHover: '#555', // Cor do thumb ao passar o mouse
    text: {
      primary: '#212121',
      secondary: '#FFFFFF',
      tertiary: '#030229',
      disabled: '#BDBDBD',
      link: '#007bff',
    },
    button: {
      primary: '#605BFF',
      secondary: '#FDFDFD',
      disabled: '#BDBDBD',
    },
    border: {
      primary: '#605BFF',
      secondary: '#CDCDCD',
      disabled: '#F1F4FF',
    },
    error: '#D32F2F',
    success: '#388E3C',
    warning: '#FBC02D',
  },
  fonts: {
    primary: "'Nunito', sans-serif",
  },
  fontSizes: {
    xs: '10px',
    sm: '12px',
    md: '14px',
    lg: '18px',
    xl: '24px',
    xxl: '32px',
    heading: {
      h1: '48px',
      h2: '40px',
      h3: '32px',
      h4: '24px',
      h5: '20px',
      h6: '16px',
    },
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px',
    xxl: '24px',
    xxxl: '28px',
  },
  shadows: {
    sm: '0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24)',
    md: '0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23)',
    lg: '0px 10px 20px rgba(0, 0, 0, 0.19), 0px 6px 6px rgba(0, 0, 0, 0.23)',
    xl: '0px 14px 28px rgba(0, 0, 0, 0.25), 0px 10px 10px rgba(0, 0, 0, 0.22)',
  },
  gradient: {
    primary:
      'linear-gradient(90deg, rgba(96, 91, 255, 0.1) 0%, rgba(241, 244, 255, 0.3) 20%)',
  },
  breakpoints: {
    xs: '480px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    rounded: '50%',
  },
  transitions: {
    default: 'all 0.3s ease',
    fast: 'all 0.15s ease',
  },
  zIndex: {
    dropdown: 1000,
    modal: 1050,
    overlay: 1060,
    tooltip: 1070,
  },
};
