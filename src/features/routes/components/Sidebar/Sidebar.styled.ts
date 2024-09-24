import styled from 'styled-components';

export const SidebarContainer = styled.div`
  position: relative;
  height: 100%;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 60px 1fr auto;
  row-gap: 20px;
  padding: ${({ theme }) => theme.spacing.md};
`;
