import { Button, Input } from '@/components';
import SEO from '@/components/SEO/SEO';
import AuthFormWrapper from '@/features/auth/components/AuthFormWrapper';
import { useFormSubmit } from '@/hooks/useFormSubmit';
import paths from '@/router/config/paths';

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
    <>
      <SEO
        resource={{
          title: 'Crie sua Conta na [Nome do Site] | Cadastro Fácil e Rápido',
          shortDescription:
            'Junte-se à [Nome do Site] e descubra uma experiência personalizada. Cadastre-se de forma rápida e fácil, com segurança garantida.',
        }}
      />
      <AuthFormWrapper
        title="Get Started Now"
        subTitleDecription="Already have an account ?"
        subTitleLink={{
          text: 'Sign In',
          to: paths.ROOT_SIGN_IN,
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
    </>
  );
};

export default SignUpForm;
