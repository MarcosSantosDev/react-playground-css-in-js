import { SEO } from '@/components/app';
import AuthFormWrapper from '@/features/auth/components/AuthFormWrapper';
import SignInForm from '@/features/auth/components/SignInForm/SignInForm';
import AuthLayout from '@/layouts/AuthLayout/AuthLayout';
import paths from '@/router/config/paths';

const SignIn = () => (
  <AuthLayout>
    <SEO
      resource={{
        title: 'Faça Login na [Nome do Site] | Acesse Sua Conta Agora',
        shortDescription:
          'Acesse sua conta na [Nome do Site] e aproveite todos os nossos recursos exclusivos. Faça login de forma rápida e segura para continuar explorando.',
      }}
    />
    <AuthFormWrapper
      title="Welcome back!"
      subTitleDescription="Don't have an account ?"
      subTitleLink={{
        text: 'Sign Up',
        to: paths.ROOT_SIGN_UP,
      }}
    >
      <SignInForm />
    </AuthFormWrapper>
  </AuthLayout>
);

export default SignIn;
