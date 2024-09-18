import { Icon, IconButton } from '@/components';
import { useAuthState } from '@/features/routes/hooks/useAuthState';
import { usePanelState } from '@/features/routes/hooks/useSidebarPanelState';

import Menu from './Menu';
import * as S from './Sidebar.styled';
import User from './User';

const Sidebar = () => {
  const { logout } = useAuthState();
  const { panelIsOpened, togglePanel } = usePanelState();

  return (
    <S.Container>
      <S.Header>
        {panelIsOpened && (
          <img src="assets/app/playground-logo.png" alt="Logo" />
        )}
        <IconButton onClick={togglePanel}>
          <Icon
            name={panelIsOpened ? 'panel-left-close' : 'panel-left-open'}
            size={20}
          />
        </IconButton>
      </S.Header>

      <Menu />

      <S.Footer>
        <S.FooterContent panelIsOpened={panelIsOpened}>
          <User />
          <IconButton type="button" onClick={() => logout()}>
            <Icon name="log-out" size={20} />
          </IconButton>
        </S.FooterContent>
      </S.Footer>
    </S.Container>
  );
};

export default Sidebar;
