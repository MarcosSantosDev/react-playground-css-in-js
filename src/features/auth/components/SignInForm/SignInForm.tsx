import { Button, Input } from '@/components';
import { useAuthState } from '@/features/routes/hooks/useAuthState';
import { useFormSubmit } from '@/hooks/useFormSubmit';

import * as S from './SignInForm.styles';

type SignInFormData = {
  email: string;
  password: string;
};

const SignInForm = () => {
  const { login } = useAuthState();

  const handleSubmit = useFormSubmit(data => {
    const formData = data as SignInFormData;
    login({
      id: '1',
      name: 'Ghost',
      email: formData.email,
    });
  });

  return (
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
      <Button type="submit" size="md" align="center">
        Sign In
      </Button>
    </S.Form>
  );
};

export default SignInForm;
