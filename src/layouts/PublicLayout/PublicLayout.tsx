import { motion } from 'framer-motion';
import { Navigate, useLocation } from 'react-router-dom';

import { useAuth } from '@/features/auth/hooks/useAuth';
import routePaths from '@/router/config/routePaths';

import * as S from './PublicLayout.styles';

import authBgPage from '/assets/images/backgrounds/auth-page.svg';

const LogoImg = () => {
  return (
    <motion.img
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      src={authBgPage}
      alt="Illustration of a man sitting in a chair in front of a computer"
    />
  );
};

const PublicLayout = ({ children }: React.PropsWithChildren) => {
  const location = useLocation();

  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to={routePaths.ROOT} replace={true} />;
  }

  return (
    <S.Container
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <S.ContentColumn>{children}</S.ContentColumn>
      <S.ContentLogoImg>
        <LogoImg />
      </S.ContentLogoImg>
    </S.Container>
  );
};

export default PublicLayout;
