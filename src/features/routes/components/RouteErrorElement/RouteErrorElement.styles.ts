import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background || '#f0f0f0'};
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 12rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.primary || '#333'};
`;

export const Subtitle = styled.p`
  font-size: 2.5rem;
  margin: 10px 0;
  color: ${({ theme }) => theme.colors.text || '#555'};
`;
