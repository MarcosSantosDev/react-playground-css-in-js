import { useState } from 'react';

import { Navigate, Outlet } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import * as S from './AppLayout.styles';

type AppAuthLayoutProps = {
  isAuthenticated: boolean;
  redirectTo: string;
};

function AppAuthLayout({ isAuthenticated, redirectTo }: AppAuthLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (isAuthenticated) {
    return (
      <S.Container>
        <S.SidebarWrapper isOpen={isSidebarOpen}>
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </S.SidebarWrapper>
        <S.MainContent isSidebarOpen={isSidebarOpen}>
          <S.NavbarWrapper>
            <Navbar />
          </S.NavbarWrapper>
          <S.ContentArea>
            <Outlet />
          </S.ContentArea>
        </S.MainContent>
      </S.Container>
    );
  }

  return <Navigate to={redirectTo} />;
}

export default AppAuthLayout;
