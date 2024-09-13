import styled from 'styled-components';

type SidebarProps = {
  isOpen: boolean;
};

type MainContentProps = {
  isSidebarOpen: boolean;
};

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

export const SidebarWrapper = styled.div<SidebarProps>`
  width: ${({ isOpen }) => (isOpen ? '250px' : '0')};
  transition: width 0.3s ease;
  overflow: hidden;
`;

export const MainContent = styled.div<MainContentProps>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: ${({ isSidebarOpen }) =>
    isSidebarOpen ? 'calc(100vw - 250px)' : '100vw'};
  transition: width 0.3s ease;
  overflow-y: auto;
`;

export const navbarMaxHeight = 64;

export const NavbarWrapper = styled.div`
  height: ${navbarMaxHeight}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const ContentArea = styled.div`
  padding: 20px;
  flex-grow: 1;
  background-color: #f5f5f5;
`;
