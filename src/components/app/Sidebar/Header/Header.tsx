import { Icon, IconButton } from '@/components/ui';
import { usePanelState } from '@/features/routes/hooks/useSidebarPanelState';

import * as S from './Header.styles';

const Header = () => {
  const { panelIsOpened, togglePanel } = usePanelState();

  return (
    <S.Header>
      {panelIsOpened && (
        <img src="assets/images/logos/playground-logo.png" alt="Logo" />
      )}
      <IconButton onClick={togglePanel}>
        <Icon
          name={panelIsOpened ? 'panel-left-close' : 'panel-left-open'}
          size={20}
        />
      </IconButton>
    </S.Header>
  );
};

export default Header;
