import { useLocation } from 'react-router-dom';

import { useSidebarNavigationRoutes } from '@/features/routes/hooks/useSidebarNavigationRoutes';
import { usePanelState } from '@/features/routes/hooks/useSidebarPanelState';

import * as S from './Menu.styled';
import MenuItem from './MenuItem';

const Menu = () => {
  const location = useLocation();
  const { panelIsOpened } = usePanelState();
  const sidebarNavigationRoutes = useSidebarNavigationRoutes();

  const itemActive = (pathName: string) => {
    return pathName === location.pathname;
  };

  return (
    <S.Container>
      <S.MenuGroupItem>
        {sidebarNavigationRoutes.map(route => (
          <MenuItem
            key={route.id}
            path={route.path ?? ''}
            title={route.navigationTitle ?? ''}
            iconName={route.navigationIcon}
            isActive={itemActive(route.path ?? '')}
            panelIsOpened={panelIsOpened}
          />
        ))}
      </S.MenuGroupItem>
    </S.Container>
  );
};

export default Menu;
