import { Button } from '@/components/ui';

import * as S from './RouteErrorElementFallback.styles';

type RouteErrorElementFallbackProps = {
  title: string;
  subtitle: string;
  onGoToHomePage: () => void;
};

const RouteErrorElementFallback = ({
  title,
  subtitle,
  onGoToHomePage,
}: RouteErrorElementFallbackProps) => (
  <S.Container role="alert">
    <S.Img src="/assets/images/feedbacks/astronaut.svg" alt="" />

    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Title>Algo deu errado.</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <S.ButtonGroup>
        <Button
          onClick={onGoToHomePage}
          variant="primary"
          icon={{
            align: 'left',
            name: 'move-left',
          }}
        >
          Voltar ao inicio
        </Button>
      </S.ButtonGroup>
    </S.Content>
  </S.Container>
);

export default RouteErrorElementFallback;
