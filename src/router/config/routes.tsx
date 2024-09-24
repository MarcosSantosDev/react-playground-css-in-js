import SignInForm from '@/features/auth/sign-in/components/SignInForm';
import SignUpForm from '@/features/auth/sign-up/components/SignUpForm';
import { NotFound } from '@/features/routes/components';
import { AuthLayout, AppLayout } from '@/features/routes/layouts';

import { appRoutesConfig } from './app.routes';
import paths from './paths';
import { RouteObject } from './route.types';

export const routes: RouteObject[] = [
  {
    id: 'ROOT_SIGN_IN',
    path: paths.ROOT_SIGN_IN,
    element: (
      <AuthLayout redirectTo="/">
        <SignInForm />
      </AuthLayout>
    ),
  },
  {
    id: 'ROOT_SIGN_UP',
    path: paths.ROOT_SIGN_UP,
    element: (
      <AuthLayout redirectTo="/">
        <SignUpForm />
      </AuthLayout>
    ),
  },
  {
    errorElement: <NotFound />,
    id: 'ROOT',
    path: paths.ROOT,
    element: <AppLayout redirectTo="/sign-in" />,
    children: appRoutesConfig,
  },
];

export default routes;
