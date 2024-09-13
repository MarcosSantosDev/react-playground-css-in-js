import { Button } from '@/components';
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
        <Button variant="outlined">Continue with Google</Button>
        <Button variant="outlined">Continue with Apple</Button>
      </S.OAuthWrapper>
    </S.Container>
  );
};

export default OAuth;
