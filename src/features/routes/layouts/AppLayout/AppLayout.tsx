import { Navigate, Outlet } from 'react-router-dom';

import { Sidebar } from '@/features/routes/components';
import { useAuthState } from '@/features/routes/hooks/useAuthState';
import { usePanelState } from '@/features/routes/hooks/useSidebarPanelState';

import * as S from './AppLayout.styles';

type AppAuthLayoutProps = {
  redirectTo: string;
};

function AppAuthLayout({ redirectTo }: AppAuthLayoutProps) {
  const { isAuthenticated } = useAuthState();
  const { panelIsOpened } = usePanelState();

  if (isAuthenticated) {
    return (
      <>
        <S.Container>
          <S.SidebarWrapper panelIsOpened={panelIsOpened}>
            <Sidebar />
          </S.SidebarWrapper>
          <S.MainContent panelIsOpened={panelIsOpened}>
            <S.ContentArea>
              <Outlet />
            </S.ContentArea>
          </S.MainContent>
        </S.Container>
      </>
    );
  }

  return <Navigate to={redirectTo} />;
}

export default AppAuthLayout;
