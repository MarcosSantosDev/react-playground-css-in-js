import styled from 'styled-components';

export const IconButton = styled.button`
  display: flex;
  place-items: center;
  padding: ${({ theme }) => theme.spacing.md};
  width: auto;
  cursor: pointer;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.button.secondary};
  opacity: 0.8;

  :hover {
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.primary};
  }
`;
