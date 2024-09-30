import SEO from '@/components/SEO/SEO';
import AuthFormWrapper from '@/features/auth/components/AuthFormWrapper';
import SignUpForm from '@/features/auth/components/SignUpForm/SignUpForm';
import AuthLayout from '@/layouts/AuthLayout/AuthLayout';
import paths from '@/router/config/paths';

const SignUp = () => (
  <AuthLayout>
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
      <SignUpForm />
    </AuthFormWrapper>
  </AuthLayout>
);

export default SignUp;
