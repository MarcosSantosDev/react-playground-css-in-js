import styled, { css } from 'styled-components';

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto;
  row-gap: ${({ theme }) => theme.spacing.xs};
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  padding: 0 ${({ theme }) => theme.spacing.xs};
`;

export const InputField = styled.input<{ hasError: boolean }>`
  ${({ theme, hasError }) => css`
    width: 100%;
    padding: ${theme.spacing.md};
    border-width: 1px;
    border-style: solid;
    border-color: ${hasError
      ? theme.colors.error
      : theme.colors.border.secondary};
    border-radius: ${theme.borderRadius.sm};
    outline: none;
    color: ${theme.colors.text.primary};
    background-color: ${theme.colors.background};
    font-size: ${theme.fontSizes.md};

    &::placeholder {
      color: ${theme.colors.text.quaternary};
    }

    &:focus {
      outline-width: 1px;
      outline-style: solid;
      outline-color: ${hasError
        ? theme.colors.error
        : theme.colors.border.secondary};
    }
  `}
`;

export const ErrorMessage = styled.span`
  ${({ theme }) => css`
    margin-top: ${theme.spacing.xs};
    color: ${theme.colors.error};
    font-size: ${theme.fontSizes.sm};
  `};
`;
