import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 1rem;
  border-radius: 8px;

  display: grid;
  grid-template-columns: auto;
  row-gap: ${({ theme }) => theme.spacing.lg};
`;

export const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto;
  row-gap: ${({ theme }) => theme.spacing.sm};
`;

export const HeaderTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fontSizes.heading.h3};
`;

export const HeaderContentSubTitle = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
  font-size: ${({ theme }) => theme.fontSizes.md};
`;

export const HeaderDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: inherit;
`;

export const Content = styled.div``;

export const OAuthContent = styled.div``;
