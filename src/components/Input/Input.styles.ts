import styled from 'styled-components';

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto;
  row-gap: ${({ theme }) => theme.spacing.xs};
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  padding: 0 ${({ theme }) => theme.spacing.xs};
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.border.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  outline: none;
  color: ${({ theme }) => theme.colors.text.primary};
  background-color: ${({ theme }) => theme.colors.background};
  font-size: ${({ theme }) => theme.fontSizes.md};

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.primary};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.border};
  }
`;
