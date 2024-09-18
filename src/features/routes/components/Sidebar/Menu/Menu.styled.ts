import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  overflow: auto;
`;

export const MenuGroupItem = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  display: grid;
  grid-template-columns: auto;
  gap: ${({ theme }) => theme.spacing.md};
`;
