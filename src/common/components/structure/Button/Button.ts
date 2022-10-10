import * as React from 'react';

import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

type Size = 'small' | 'medium' | 'large';

type Variation = 'primary' | 'secondary';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /**
   * Component variations
   */
  variation: Variation;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: Size;
};

export const buttonSize: Record<Size, string> = {
  small: 'padding: 4px 6px;',
  medium: 'padding: 8px 12px;',
  large: 'padding: 16px 32px;',
};

const variationOptions: Record<Variation, FlattenSimpleInterpolation> = {
  primary: css`
    color: white;
    background-color: #1ea7fd;
  `,
  secondary: css`
    background-color: transparent;
    color: #1ea7fd;
    border: 1px solid #1ea7fd;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  `,
};

export const Button = styled.button<ButtonProps>`
  ${({ theme, variation = 'primary', size = 'small' }) => css`
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: ${theme.typograph.font.size.small};
    font-weight: 700;
    border: 0;
    border-radius: 3em;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    text-decoration: none;
    cursor: pointer;

    ${buttonSize[size]}

    ${variationOptions[variation]};

    &:disabled {
      cursor: not-allowed;
      opacity: 0.2;
    }

    &:hover:not([disabled]) {
      opacity: 0.8;
      box-shadow: 0px 0px 50px 0px rgba(19, 38, 47, 0.2);
    }
  `}
`;
