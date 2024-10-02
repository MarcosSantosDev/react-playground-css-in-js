import { FallbackProps } from 'react-error-boundary';

import { Button } from '@/components/ui';

import * as S from './ErrorFallback.styles';

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <S.ErrorContainer role="alert">
      <img width={200} src="/assets/images/feedbacks/server-error.svg" alt="" />
      <S.Title>Ops! Algo deu errado.</S.Title>
      <S.Subtitle>{error?.message}</S.Subtitle>
      <Button onClick={resetErrorBoundary} variant="error">
        Tentar novamente
      </Button>
    </S.ErrorContainer>
  );
};

export default ErrorFallback;
