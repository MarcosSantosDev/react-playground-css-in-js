import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from 'react-router-dom';

import { Button } from '@/components';
import paths from '@/router/config/paths';

import * as S from './ErrorBoundary.styles';

type ErrorContentProps = {
  title: string;
  subtitle: string;
  onGoToHomePage: () => void;
};

const ErrorContent = ({
  title,
  subtitle,
  onGoToHomePage,
}: ErrorContentProps) => (
  <S.Container>
    <S.Title>{title}</S.Title>
    <S.Subtitle>{subtitle}</S.Subtitle>
    <Button
      type="button"
      variant="primary"
      icon={{ align: 'left', name: 'link' }}
      onClick={onGoToHomePage}
    >
      Voltar para página principal
    </Button>
  </S.Container>
);

const ErrorBoundary = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  const handleGoToHomePage = () => {
    navigate(paths.ROOT);
  };

  if (isRouteErrorResponse(error)) {
    const title = error.status.toString();
    const subtitle =
      error.status === 404 ? 'Página não encontrada' : error.statusText;

    return (
      <ErrorContent
        title={title}
        subtitle={subtitle}
        onGoToHomePage={handleGoToHomePage}
      />
    );
  }

  return (
    <ErrorContent
      title="Ops!"
      subtitle="Ocorreu um erro inesperado, desculpe o transtorno"
      onGoToHomePage={handleGoToHomePage}
    />
  );
};

export default ErrorBoundary;
