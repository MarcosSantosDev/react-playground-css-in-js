import styled from 'styled-components';

export const NavContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  overflow: auto;
`;

export const NavGroup = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  display: grid;
  grid-template-columns: auto;
  gap: ${({ theme }) => theme.spacing.md};
`;

type NavItemStyledProps = {
  hiddenItem: boolean;
};

export const NavItem = styled.li<NavItemStyledProps>`
  width: ${({ hiddenItem }) => (hiddenItem ? 'fit-content' : '100%')};
  display: grid;
  grid-template-columns: ${({ hiddenItem }) =>
    hiddenItem ? '20px' : '20px 1fr'};
  grid-template-rows: 20px;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.tertiary};
  opacity: 0.8;

  &.active {
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.gradient.primary};
  }

  :hover {
    background: ${({ theme }) => theme.gradient.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

type NavItemLabelStyledProps = {
  hiddenItem: boolean;
};

export const NavItemLabel = styled.span<NavItemLabelStyledProps>`
  display: ${({ hiddenItem }) => (hiddenItem ? 'none' : 'normal')};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 500;
  color: inherit;
`;
