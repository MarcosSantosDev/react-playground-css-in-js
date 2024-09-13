// Button.tsx
import styled from 'styled-components';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'outlined';
  size?: 'sm' | 'md' | 'lg';
};

export const Button = styled.button<ButtonProps>`
  background-color: ${({ theme, variant }) => {
    switch (variant) {
      case 'secondary':
        return theme.colors['secondary'];
      case 'outlined':
        return theme.colors['background'];
      default:
        return theme.colors['primary'];
    }
  }};
  color: ${({ theme, variant }) => {
    switch (variant) {
      case 'secondary':
      case 'outlined':
        return theme.colors.text['secondary'];
      default:
        return theme.colors.text['contrast'];
    }
  }};
  font-size: ${({ theme, size }) => {
    switch (size) {
      case 'sm':
        return theme.fontSizes.sm;
      case 'lg':
        return theme.fontSizes.lg;
      default:
        return theme.fontSizes.md;
    }
  }};
  padding: ${({ theme, size }) => {
    switch (size) {
      case 'sm':
        return `${theme.spacing.sm} ${theme.spacing.md}`;
      case 'lg':
        return `${theme.spacing.lg} ${theme.spacing.xl}`;
      default:
        return `${theme.spacing.md} ${theme.spacing.lg}`;
    }
  }};
  border: ${({ theme, variant }) => {
    switch (variant) {
      case 'outlined':
        return `1px solid ${theme.colors.accent}`;
      default:
        return 'none';
    }
  }};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    filter: opacity(0.8);
    border-color: ${({ theme, variant }) => {
      if (variant === 'outlined') {
        return theme.colors.border;
      }
    }};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.text.disabled};
    cursor: not-allowed;
  }
`;
