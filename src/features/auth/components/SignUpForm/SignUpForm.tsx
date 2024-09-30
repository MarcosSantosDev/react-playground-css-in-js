import { zodResolver } from '@hookform/resolvers/zod';

import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button, Input } from '@/components';

import { AuthSignUpPayload } from '../../types/auth.types';
import * as S from './SignUpForm.styles';

const schema = z.object({
  userName: z.string().min(1, 'Informe seu usuário'),
  email: z
    .string()
    .min(1, 'Informe o seu email')
    .email('Informe um email válido'),
  password: z
    .string()
    .min(1, 'Informe o sua senha')
    .min(4, 'Senha muito curta - deve conter no mínimo 4 letras.'),
});

type SignUpFormData = AuthSignUpPayload;

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    mode: 'onSubmit',
    defaultValues: {
      userName: '',
      email: '',
      password: '',
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = (credentials: SignUpFormData) => {
    //
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <S.FieldsGroup>
        <Input
          {...register('userName')}
          label="Name"
          type="text"
          placeholder="Enter your name"
          error={errors.userName}
        />
        <Input
          {...register('email')}
          label="Email"
          type="text"
          placeholder="Enter your email"
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
      <Button type="submit" size="md">
        Sign Up
      </Button>
    </S.Form>
  );
};

export default SignUpForm;
