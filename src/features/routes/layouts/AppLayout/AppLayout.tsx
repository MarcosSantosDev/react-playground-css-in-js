import { Navigate, Outlet } from 'react-router-dom';

import { Sidebar } from '@/features/routes/components';
import { useAuthState } from '@/features/routes/hooks/useAuthState';
import { usePanelState } from '@/features/routes/hooks/useSidebarPanelState';
import paths from '@/router/config/paths';

import * as S from './AppLayout.styles';

function AppAuthLayout() {
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

  return <Navigate to={paths.ROOT_SIGN_IN} />;
}

export default AppAuthLayout;
