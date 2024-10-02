import { Button } from '@/components/ui';

import * as S from './OAuth.styles';

const OAuth = () => {
  const onGoogleLogin = () => {
    // Lógica de login com Google
  };

  const onAppleLogin = () => {
    // Lógica de login com Apple
  };

  return (
    <S.Container>
      <S.ConditionWrapper>
        <S.Line />
        <S.Or>Or continue with</S.Or>
        <S.Line />
      </S.ConditionWrapper>
      <S.OAuthWrapper>
        <Button
          variant="secondary"
          onClick={onGoogleLogin}
          icon={{
            align: 'left',
            name: 'g-google',
          }}
        >
          Continue with Google
        </Button>
        <Button
          variant="secondary"
          onClick={onAppleLogin}
          icon={{
            align: 'left',
            name: 'apple',
          }}
        >
          Continue with Apple
        </Button>
      </S.OAuthWrapper>
    </S.Container>
  );
};

export default OAuth;
