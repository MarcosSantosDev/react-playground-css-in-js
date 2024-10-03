import { zodResolver } from '@hookform/resolvers/zod';

import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button, Input } from '@/components/ui';

import { useAuth } from '../../hooks/useAuth';
import { AuthSignInPayload } from '../../types/auth.types';
import * as S from './SignInForm.styles';

const schema = z.object({
  email: z
    .string()
    .min(1, 'Informe seu email.')
    .email('Informe um email valido'),
  password: z
    .string()
    .min(1, 'Informe sua senha.')
    .min(4, 'Senha muito curta - deve conter no mínimo 4 letras.'),
});

type SignInFormData = AuthSignInPayload;

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
      remember: false,
    },
    resolver: zodResolver(schema),
  });

  const { signIn, isLoading } = useAuth();

  const onSubmit = (credentials: SignInFormData) => {
    signIn(credentials);
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <S.FieldsGroup>
        <Input
          {...register('email')}
          label="Email"
          type="text"
          placeholder="jon@example.com"
          error={errors.email}
        />
        <Input
          {...register('password')}
          label="Password"
          type="password"
          placeholder="Enter your password"
          error={errors.password}
        />
      </S.FieldsGroup>
      <Button type="submit" size="md" align="center" disabled={isLoading}>
        Sign In
      </Button>
    </S.Form>
  );
};

export default SignInForm;
