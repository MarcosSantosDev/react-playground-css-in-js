import styled from 'styled-components';

export const Header = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px
  padding: ${({ theme }) => theme.spacing.md} 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.secondary};

  img {
    width: 100px;
    height: auto;
  }
`;
