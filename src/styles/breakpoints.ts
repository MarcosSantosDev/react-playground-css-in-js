import { css, FlattenSimpleInterpolation } from 'styled-components';

type BreakpointParams = {
  style: FlattenSimpleInterpolation;
};

export const mobile = ({ style }: BreakpointParams) => css`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    ${style};
  }
`;
export const tablet = ({ style }: BreakpointParams) => css`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    ${style};
  }
`;
export const desktop = ({ style }: BreakpointParams) => css`
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    ${style};
  }
`;
export const laptop = ({ style }: BreakpointParams) => css`
  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    ${style};
  }
`;
