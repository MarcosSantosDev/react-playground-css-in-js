import { useNavigate } from 'react-router-dom';

import { Button } from '@/components';
import routePaths from '@/router/routePaths';

import * as S from './NotFound.styled';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoToHomePage = () => {
    navigate(routePaths.ROOT);
  };

  return (
    <S.Container>
      <S.Title>404</S.Title>
      <S.Subtitle>Página não encontrada</S.Subtitle>
      <Button
        type="button"
        variant="primary"
        icon={{ align: 'left', name: 'link' }}
        onClick={handleGoToHomePage}
      >
        Voltar para pagina principal
      </Button>
    </S.Container>
  );
};

export default NotFoundPage;
