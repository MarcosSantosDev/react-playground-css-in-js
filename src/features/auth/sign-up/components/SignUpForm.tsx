import { Button } from '@/components';
import Input from '@/components/Input/Input';
import { useFormSubmit } from '@/hooks/useFormSubmit';
import routePaths from '@/router/routePaths';

import AuthFormWrapper from '../../components/AuthFormWrapper';
import * as S from './SignUpForm.styles';

type SignUpFormData = {
  email: string;
  password: string;
};

const SignUpForm = () => {
  const handleSubmit = useFormSubmit(data => {
    const formData = data as SignUpFormData;
    // console.log(formData);
  });

  return (
    <AuthFormWrapper
      title="Get Started Now"
      subTitleDecription="Already have an account ?"
      subTitleLink={{
        text: 'Sign In',
        to: routePaths.ROOT_SIGN_IN,
      }}
    >
      <S.Form onSubmit={handleSubmit} autoComplete="off">
        <S.FieldsGroup>
          <Input
            label="Name"
            type="text"
            placeholder="Enter your name"
            name="name"
          />
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
          Sign Up
        </Button>
      </S.Form>
    </AuthFormWrapper>
  );
};

export default SignUpForm;
