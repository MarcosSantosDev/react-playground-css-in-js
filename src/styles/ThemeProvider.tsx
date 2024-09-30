import { ThemeProvider as SCThemeProvider } from 'styled-components';

import { GlobalStyles } from '@/styles/global-styles';
import { theme } from '@/styles/theme';

const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <SCThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </SCThemeProvider>
  );
};

export default ThemeProvider;
