import styled, { css } from 'styled-components';

import { tablet } from '@/styles/breakpoints';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: space-around;
    gap: ${theme.spacing.xl};
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: ${theme.spacing.xl};
    border: 1px solid ${theme.colors.error.tertiary};
    border-radius: 5px;
    background: ${theme.colors.surface};

    ${tablet({
      style: css`
        flex-direction: column;
      `,
    })}
  `}
`;

export const Img = styled.img`
  width: 300px;

  ${tablet({
    style: css`
      width: 200px;
    `,
  })}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.heading.h2};
    margin: 0;
    color: ${theme.colors.primary};
  `}
`;

export const Subtitle = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.heading.h4};
    margin: 10px 0;
    color: ${theme.colors.text.tertiary};
  `}
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.xl};
`;
