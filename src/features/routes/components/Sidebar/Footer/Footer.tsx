import { Icon, IconButton } from '@/components';
import { useAuthState } from '@/features/routes/hooks/useAuthState';
import { usePanelState } from '@/features/routes/hooks/useSidebarPanelState';

import * as S from './Footer.styles';

function Footer() {
  const { logout } = useAuthState();
  const { panelIsOpened } = usePanelState();

  return (
    <S.FooterContainer>
      <S.FooterContent panelIsOpened={panelIsOpened}>
        <S.UserContainer>
          <picture>
            <source
              media="(min-width:576px)"
              srcSet="assets/app/profile-photo.jpg"
            />
            <img src="https://placehold.jp/150x150.png" alt="Avatar" />
          </picture>
          {panelIsOpened && (
            <S.UserInfo>
              <S.UserName>Marcos Santos</S.UserName>
              <S.UserSubInfo>Front-end Sr.</S.UserSubInfo>
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
