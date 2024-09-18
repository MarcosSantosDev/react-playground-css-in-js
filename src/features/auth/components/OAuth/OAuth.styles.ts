import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  row-gap: ${({ theme }) => theme.spacing.lg};
`;

export const ConditionWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.surface};
`;

export const Or = styled.span`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: normal;
  white-space: nowrap;
`;

export const OAuthWrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  row-gap: ${({ theme }) => theme.spacing.md};
`;
