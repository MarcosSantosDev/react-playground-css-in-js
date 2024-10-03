import { Navigate, Outlet } from 'react-router-dom';

import { Suspense, Sidebar } from '@/components/app';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { usePanelState } from '@/features/routes/hooks/useSidebarPanelState';
import routePaths from '@/router/config/routePaths';

import * as S from './PrivateLayout.styles';

const PrivateLayout = () => {
  const { isAuthenticated } = useAuth();
  const { panelIsOpened } = usePanelState();

  if (!isAuthenticated) {
    return <Navigate to={routePaths.ROOT_SIGN_IN} replace={true} />;
  }

  return (
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
  );
};

export default PrivateLayout;
