import { useLocation, useNavigate } from 'react-router-dom';

import { Icon } from '@/components';
import { usePanelState } from '@/features/routes/hooks/useSidebarPanelState';
import { appRoutesNavigation } from '@/router/config/app.routes';

import * as S from './Nav.styles';

const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { panelIsOpened } = usePanelState();

  const itemActive = (pathName: string) => {
    return pathName === location.pathname;
  };

  return (
    <S.NavContainer>
      <S.NavGroup>
        {appRoutesNavigation.map(route => (
          <S.NavItem
            key={route.id}
            className={itemActive(route.path ?? '') ? 'active' : ''}
            onClick={() => navigate(route.path ?? '')}
            hiddenItem={!panelIsOpened}
          >
            {route.navigationIcon && (
              <Icon size={20} name={route.navigationIcon} />
            )}
            <S.NavItemLabel hiddenItem={!panelIsOpened}>
              {route.navigationTitle ?? ''}
            </S.NavItemLabel>
          </S.NavItem>
        ))}
      </S.NavGroup>
    </S.NavContainer>
  );
};

export default Nav;
