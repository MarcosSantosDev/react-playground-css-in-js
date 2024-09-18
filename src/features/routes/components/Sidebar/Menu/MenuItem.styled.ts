import styled from 'styled-components';

type MenuItemStyledProps = {
  hiddenItem: boolean;
};

export const MenuItem = styled.li<MenuItemStyledProps>`
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

type ItemStyledProps = {
  hiddenItem: boolean;
};

export const Item = styled.span<ItemStyledProps>`
  display: ${({ hiddenItem }) => (hiddenItem ? 'none' : 'normal')};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 500;
  color: inherit;
`;
