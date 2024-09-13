import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
${({ theme }) => css`
  body {
    margin: 0;
    font-family: ${theme.fonts.primary};
    font-size: ${theme.fontSizes.md};
    line-height: 1.5;
    color: ${theme.colors.text.primary};
    background-color: ${theme.colors.background};

    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  }
`}
`;
