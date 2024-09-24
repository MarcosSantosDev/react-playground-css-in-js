import { Navigate, useLocation } from 'react-router-dom';

import { useAuthState } from '@/features/routes/hooks';
import paths from '@/router/config/paths';

import * as S from './AuthLayout.styles';

import authBgLogoSignIn from '/assets/auth/sign-in.svg';
import authBgLogoSignUp from '/assets/auth/sign-up.svg';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const { isAuthenticated } = useAuthState();
  const location = useLocation();

  const isSignInPage = location.pathname === paths.ROOT_SIGN_IN;

  if (isAuthenticated) {
    return <Navigate to={paths.ROOT} />;
  }

  return (
    <S.Container>
      <S.ContentColumn>{children}</S.ContentColumn>
      <S.ContentLogoImg>
        <img
          src={isSignInPage ? authBgLogoSignIn : authBgLogoSignUp}
          alt="Illustration of a man sitting in a chair in front of a computer"
        />
      </S.ContentLogoImg>
    </S.Container>
  );
};

export default AuthLayout;
