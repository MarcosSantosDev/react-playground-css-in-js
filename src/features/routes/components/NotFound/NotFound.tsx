import { useNavigate } from 'react-router-dom';

import { Button } from '@/components';
import paths from '@/router/config/paths';

import * as S from './NotFound.styles';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoToHomePage = () => {
    navigate(paths.ROOT);
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
