import { usePanelState } from '@/features/routes/hooks/useSidebarPanelState';

import * as S from './User.styled';

function User() {
  const { panelIsOpened } = usePanelState();

  return (
    <S.Container>
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
    </S.Container>
  );
}

export default User;
