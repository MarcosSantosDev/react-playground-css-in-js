import styled from 'styled-components';

type SidebarProps = {
  panelIsOpened: boolean;
};

type MainContentProps = {
  panelIsOpened: boolean;
};

const SIDEBAR_WIDTH_OPENED = 250;
const SIDEBAR_WIDTH_CLOSED = 68;

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

export const SidebarWrapper = styled.div<SidebarProps>`
  width: ${({ panelIsOpened }) =>
    panelIsOpened ? `${SIDEBAR_WIDTH_OPENED}px` : `${SIDEBAR_WIDTH_CLOSED}px`};
  transition: width 0.3s ease, background-color 0.3s ease;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.sm};

  @media (max-width: 768px) {
    position: absolute;
    z-index: 10;
    height: 100%;
  }
`;

export const MainContent = styled.div<MainContentProps>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: ${({ panelIsOpened }) =>
    `calc(100vw - ${
      panelIsOpened ? SIDEBAR_WIDTH_OPENED : SIDEBAR_WIDTH_CLOSED
    }px)`};
  transition: width 0.3s ease;
  overflow-y: auto;

  @media (max-width: 768px) {
    width: 100vw;
  }
`;

export const navbarMaxHeight = 64;

export const NavbarWrapper = styled.div`
  height: ${navbarMaxHeight}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.lg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;

export const ContentArea = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  flex-grow: 1;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;
