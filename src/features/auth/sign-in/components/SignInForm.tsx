import { Button } from '@/components';
import Input from '@/components/Input';
import { useFormSubmit } from '@/hooks/useFormSubmit';
import routePaths from '@/router/routePaths';

import AuthFormWrapper from '../../components/AuthFormWrapper';
import * as S from './SignInForm.styles';

type SignInFormData = {
  email: string;
  password: string;
};

const SignInForm = () => {
  const handleSubmit = useFormSubmit(data => {
    const formData = data as SignInFormData;
    // console.log(formData);
  });

  return (
    <AuthFormWrapper
      title="Welcome back!"
      subTitleDecription="Don't have an account ?"
      subTitleLink={{
        text: 'Sign Up',
        to: routePaths.ROOT_SIGN_UP,
      }}
    >
      <S.Form onSubmit={handleSubmit} autoComplete="off">
        <S.FieldsGroup>
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            name="email"
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            name="password"
          />
        </S.FieldsGroup>
        <Button type="submit" size="md">
          Sign In
        </Button>
      </S.Form>
    </AuthFormWrapper>
  );
};

export default SignInForm;
