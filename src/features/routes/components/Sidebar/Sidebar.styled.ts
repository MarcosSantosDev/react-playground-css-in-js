import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 100%;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 60px 1fr auto;
  row-gap: 20px;
  padding: ${({ theme }) => theme.spacing.md};
`;

export const Header = styled.div`
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

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: flex-end;
  padding: ${({ theme }) => theme.spacing.md} 0px;
  border-top: 1px solid ${({ theme }) => theme.colors.border.secondary};
`;

type FooterContentStyledProps = {
  panelIsOpened: boolean;
};

export const FooterContent = styled.div<FooterContentStyledProps>`
  display: flex;
  flex-direction: ${({ panelIsOpened }) => (panelIsOpened ? 'row' : 'column')};
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.lg};
`;
