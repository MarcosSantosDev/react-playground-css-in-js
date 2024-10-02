import * as React from 'react';

import { RouteErrorElement } from '@/features/routes/components';
import AppAuthLayout from '@/layouts/AppLayout/AppLayout';

import { appRoutesConfig } from './app.routes';
import paths from './paths';
import { RouteObject } from './route.types';

const SignIn = React.lazy(() => import('@/pages/SignIn'));
const SignUp = React.lazy(() => import('@/pages/SignUp'));

export const routes: RouteObject[] = [
  {
    errorElement: <RouteErrorElement />,
    id: 'ROOT',
    path: paths.ROOT,
    element: <AppAuthLayout />,
    children: appRoutesConfig,
  },
  {
    errorElement: <RouteErrorElement />,
    id: 'ROOT_SIGN_IN',
    path: paths.ROOT_SIGN_IN,
    element: <SignIn />,
  },
  {
    errorElement: <RouteErrorElement />,
    id: 'ROOT_SIGN_UP',
    path: paths.ROOT_SIGN_UP,
    element: <SignUp />,
  },
];

export default routes;
