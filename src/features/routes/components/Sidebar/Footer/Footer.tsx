import { Icon, IconButton } from '@/components';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { usePanelState } from '@/features/routes/hooks/useSidebarPanelState';

import * as S from './Footer.styles';

function Footer() {
  const { logout, user } = useAuth();
  const { panelIsOpened } = usePanelState();

  return (
    <S.FooterContainer>
      <S.FooterContent panelIsOpened={panelIsOpened}>
        <S.UserContainer>
          <picture>
            <source media="(min-width:576px)" srcSet={user?.photoURL} />
            <img src="https://placehold.jp/150x150.png" alt="Avatar" />
          </picture>
          {panelIsOpened && (
            <S.UserInfo>
              <S.UserName>{user?.displayName}</S.UserName>
              <S.UserSubInfo>{user?.profession ?? user?.email}</S.UserSubInfo>
            </S.UserInfo>
          )}
        </S.UserContainer>

        <IconButton type="button" onClick={() => logout()}>
          <Icon name="log-out" size={20} />
        </IconButton>
      </S.FooterContent>
    </S.FooterContainer>
  );
}

export default Footer;
