import { useLocation } from 'react-router-dom';

import { usePanelState } from '@/features/routes/hooks/useSidebarPanelState';
import { appNavigationRoutesMap } from '@/router/routesConfig';

import * as S from './Menu.styled';
import MenuItem from './MenuItem';

const Menu = () => {
  const location = useLocation();
  const { panelIsOpened } = usePanelState();

  const itemActive = (pathName: string) => {
    return pathName === location.pathname;
  };

  return (
    <S.Container>
      <S.MenuGroupItem>
        {appNavigationRoutesMap.map(route => (
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
