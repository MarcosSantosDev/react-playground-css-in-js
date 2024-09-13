import SignInForm from '@/features/auth/sign-in/components/SignInForm';
import SignUpForm from '@/features/auth/sign-up/components/SignUpForm';
import NotFound from '@/features/routes/components/NotFound';
import AppAuthLayout from '@/features/routes/layouts/AppLayout';
import AuthLayout from '@/features/routes/layouts/AuthLayout';

import routePaths from './routePaths';
import { RouteObject, AppNavigationRouteObject } from './types';

const isAuthenticated = true;

export const publicRoutes: RouteObject[] = [
  {
    id: 'ROOT_SIGN_IN',
    path: routePaths.ROOT_SIGN_IN,
    element: (
      <AuthLayout isAuthenticated={isAuthenticated} redirectTo="/">
        <SignInForm />
      </AuthLayout>
    ),
  },
  {
    id: 'ROOT_SIGN_UP',
    path: routePaths.ROOT_SIGN_UP,
    element: (
      <AuthLayout isAuthenticated={isAuthenticated} redirectTo="/">
        <SignUpForm />
      </AuthLayout>
    ),
  },
];

export const privateRoutes: AppNavigationRouteObject[] = [
  {
    errorElement: <NotFound />,
    id: 'ROOT',
    path: routePaths.ROOT,
    element: (
      <AppAuthLayout isAuthenticated={isAuthenticated} redirectTo="/sign-in" />
    ),
    children: [
      {
        id: 'ROOT_INDEX',
        index: true,
        path: routePaths.ROOT_INDEX,
        element: <h1>HOME PAGE</h1>,
        navigationTitle: 'Home',
        navigationIcon: 'icon-1',
      },
      {
        id: 'ROOT_ABOUT',
        index: true,
        path: routePaths.ROOT_ABOUT,
        element: <h1>ABOUT PAGE</h1>,
        navigationTitle: 'About',
        navigationIcon: 'icon-2',
      },
    ],
  },
];
