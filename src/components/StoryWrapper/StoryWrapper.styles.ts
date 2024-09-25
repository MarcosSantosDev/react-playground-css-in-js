import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.border.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  overflow: hidden;
`;
