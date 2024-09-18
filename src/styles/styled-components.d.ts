import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      surface: string;
      scrollbarTrack: string;
      scrollbarThumb: string;
      scrollbarThumbHover: string;
      text: {
        primary: string;
        secondary: string;
        tertiary: string;
        link: string;
        disabled: string;
      };
      button: {
        primary: string;
        secondary: string;
        disabled: string;
      };
      border: {
        primary: string;
        secondary: string;
        disabled: string;
      };
      error: string;
      success: string;
      warning: string;
    };
    fonts: {
      primary: string;
    };
    fontSizes: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      heading: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
      };
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };
    shadows: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    gradient: {
      primary: string;
    };
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    borderRadius: {
      sm: string;
      md: string;
      lg: string;
      rounded: string;
    };
    transitions: {
      default: string;
      fast: string;
    };
    zIndex: {
      dropdown: number;
      modal: number;
      overlay: number;
      tooltip: number;
    };
  }
}
