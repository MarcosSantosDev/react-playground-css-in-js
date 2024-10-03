import { FallbackProps } from 'react-error-boundary';

import { Button } from '@/components/ui';

import * as S from './ErrorFallback.styles';

const ErrorFallback = ({ resetErrorBoundary }: FallbackProps) => {
  const contactSupport = () => {
    //
  };

  return (
    <S.Container role="alert">
      <S.Img src="/assets/images/feedbacks/server-error.svg" alt="" />

      <S.Content>
        <S.Title>Oops!</S.Title>
        <S.Title>Algo deu errado.</S.Title>
        <S.Subtitle>
          Não se preocupe, nosso time está aqui para te ajudar
        </S.Subtitle>
        <S.ButtonGroup>
          <Button
            onClick={resetErrorBoundary}
            variant="secondary"
            icon={{
              align: 'left',
              name: 'repeat',
            }}
          >
            Tentar novamente
          </Button>
          <Button
            onClick={contactSupport}
            variant="primary"
            icon={{
              align: 'left',
              name: 'message-square-text',
            }}
          >
            Suporte
          </Button>
        </S.ButtonGroup>
      </S.Content>
    </S.Container>
  );
};

export default ErrorFallback;
