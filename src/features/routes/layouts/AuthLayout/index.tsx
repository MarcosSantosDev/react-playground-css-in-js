import { Navigate, useLocation } from 'react-router-dom';

import { useAuthState } from '@/features/routes/hooks/useAuthState';
import routePaths from '@/router/routePaths';

import * as S from './AuthLayout.styles';

import authBgLogoSignIn from '/assets/auth/sign-in.svg';
import authBgLogoSignUp from '/assets/auth/sign-up.svg';

interface AuthLayoutProps {
  children: React.ReactNode;
  redirectTo: string;
}

const AuthLayout = ({ children, redirectTo }: AuthLayoutProps) => {
  const { isAuthenticated } = useAuthState();
  const location = useLocation();

  const isSignInPage = location.pathname === routePaths.ROOT_SIGN_IN;

  if (isAuthenticated) {
    return <Navigate to={redirectTo} />;
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
