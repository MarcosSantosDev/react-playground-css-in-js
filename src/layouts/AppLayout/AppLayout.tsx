import { Navigate, Outlet } from 'react-router-dom';

import { Suspense, Sidebar } from '@/components/app';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { usePanelState } from '@/features/routes/hooks/useSidebarPanelState';
import paths from '@/router/config/paths';

import * as S from './AppLayout.styles';

function AppAuthLayout() {
  const { isAuthenticated } = useAuth();
  const { panelIsOpened } = usePanelState();

  if (isAuthenticated) {
    return (
      <S.Container>
        <S.SidebarWrapper panelIsOpened={panelIsOpened}>
          <Sidebar />
        </S.SidebarWrapper>
        <S.MainContent panelIsOpened={panelIsOpened}>
          <S.ContentArea>
            <Suspense>
              <Outlet />
            </Suspense>
          </S.ContentArea>
        </S.MainContent>
      </S.Container>
    );
  }

  return <Navigate to={paths.ROOT_SIGN_IN} />;
}

export default AppAuthLayout;
