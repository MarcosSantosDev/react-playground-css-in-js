import { Navigate } from 'react-router-dom';

import * as S from './AuthLayout.styles';

import authBgLogo from '/assets/auth/bg-logo.jpg';

interface AuthLayoutProps {
  children: React.ReactNode;
  isAuthenticated: boolean;
  redirectTo: string;
}

const AuthLayout = ({
  children,
  isAuthenticated,
  redirectTo,
}: AuthLayoutProps) => {
  if (isAuthenticated) {
    return <Navigate to={redirectTo} />;
  }

  return (
    <S.Container>
      <S.ImageColumn imageSrc={authBgLogo} />
      <S.ContentColumn>{children}</S.ContentColumn>
    </S.Container>
  );
};

export default AuthLayout;
