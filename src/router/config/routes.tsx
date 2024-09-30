import * as React from 'react';

import { ErrorBoundary } from '@/features/routes/components';
import AppAuthLayout from '@/layouts/AppLayout/AppLayout';

import { appRoutesConfig } from './app.routes';
import paths from './paths';
import { RouteObject } from './route.types';

// Pages
const SignIn = React.lazy(() => import('@/pages/SignIn'));
const SignUp = React.lazy(() => import('@/pages/SignUp'));

export const routes: RouteObject[] = [
  {
    errorElement: <ErrorBoundary />,
    id: 'ROOT',
    path: paths.ROOT,
    element: <AppAuthLayout />,
    children: appRoutesConfig,
  },
  {
    id: 'ROOT_SIGN_IN',
    path: paths.ROOT_SIGN_IN,
    element: <SignIn />,
  },
  {
    id: 'ROOT_SIGN_UP',
    path: paths.ROOT_SIGN_UP,
    element: <SignUp />,
  },
];

export default routes;
