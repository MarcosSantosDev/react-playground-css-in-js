type Sizes = {
  small: string;
  medium: string;
  large: string;
};

export type AppTheme = {
  typograph: {
    font: {
      size: Sizes;
      family: {
        main: string;
      };
    };
  };
  colors: {
    main: string;
    secondary: string;
    neutral: {
      white: string;
      black: string;
      gray: Record<string, string>;
    };
  };
  border: {
    colors: {
      main: string;
      secondary: string;
    };
    radius: Sizes;
  };
};

const theme: AppTheme = {
  typograph: {
    font: {
      size: {
        small: '0.875rem',
        medium: '1rem',
        large: '1.5rem',
      },
      family: {
        main: 'Roboto',
      },
    },
  },
  colors: {
    main: '#22272e',
    secondary: '#adbac7',
    neutral: {
      white: '',
      black: '',
      gray: {
        50: '#adbac7',
      },
    },
  },
  border: {
    colors: {
      main: '',
      secondary: '',
    },
    radius: {
      small: '',
      medium: '',
      large: '',
    },
  },
};

export default theme;
