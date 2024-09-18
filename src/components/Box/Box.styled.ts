import styled from 'styled-components';

export type BoxStyledProps = {
  shadow?: boolean;
};

export const Box = styled.div<BoxStyledProps>`
  width: auto;
  height: auto;
  padding: ${({ theme }) => theme.spacing.sm};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme, shadow = false }) =>
    shadow ? theme.shadows.sm : 'none'};
  background: ${({ theme }) => theme.colors.background};
`;
