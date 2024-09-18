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

  /* Estilizando a barra de rolagem para navegadores baseados em WebKit (Chrome, Safari, etc.) */
  ::-webkit-scrollbar {
    width: 8px; /* Largura da barra de rolagem */
  }

  /* Background da barra de rolagem */
  ::-webkit-scrollbar-track {
    background: ${theme.colors.scrollbarTrack}; /* Cor do tema */
    border-radius: 10px;
  }

  /* Thumb (o bloco que se move na barra de rolagem) */
  ::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.scrollbarThumb}; /* Cor do tema */
    border-radius: 10px; /* Bordas arredondadas */
    border: 2px solid ${theme.colors.scrollbarTrack}; /* Cria um espaçamento */
  }

  /* Thumb ao passar o mouse (hover) */
  ::-webkit-scrollbar-thumb:hover {
    background-color: ${theme.colors.scrollbarThumbHover}; /* Cor do tema */
  }

  /* Estilizando a barra de rolagem para o Firefox */
  scrollbar-width: thin;
  scrollbar-color: ${theme.colors.scrollbarThumb} ${theme.colors.scrollbarTrack};
`}
`;
