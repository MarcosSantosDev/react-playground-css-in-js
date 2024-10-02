import styled, { css } from 'styled-components';

export const ErrorContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.xl};
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: ${theme.spacing.xl};
    border: 1px solid ${theme.colors.error.tertiary};
    border-radius: 5px;
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.heading.h4};
    margin: 0;
    color: ${theme.colors.error.secondary};
  `}
`;

export const Subtitle = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.heading.h6};
    margin: 10px 0;
    color: ${theme.colors.error.secondary};
  `}
`;
