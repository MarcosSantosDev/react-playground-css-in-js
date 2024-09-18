import * as React from 'react';

import styled from 'styled-components';

export type ButtonStyledProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    align?: 'left' | 'center' | 'right' | 'space-between';
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
  };

export const Button = styled.button<ButtonStyledProps>`
  display: inline-flex;
  align-items: center;
  justify-content: ${props => props?.align};
  gap: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme, variant }) => {
    switch (variant) {
      case 'secondary':
        return theme.colors.button.secondary;
      default:
        return theme.colors.button.primary;
    }
  }};
  color: ${({ theme, variant }) => {
    switch (variant) {
      case 'secondary':
        return theme.colors.text.primary;
      default:
        return theme.colors.text.secondary;
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
      case 'secondary':
        return `1px solid ${theme.colors.border.secondary}`;
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
      if (variant === 'secondary') {
        return theme.colors.border;
      }
    }};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.text.disabled};
    border: ${({ theme }) => `1px solid ${theme.colors.border.secondary}`};
    cursor: not-allowed;
  }
`;

export const ButtonChildren = styled.span`
  font-size: inherit;
`;
