import { NotFound } from '@/features/routes/components';
import AppAuthLayout from '@/features/routes/layouts/AppLayout/AppLayout';
// Pages
import SignIn from '@/pages/SignIn';
import SignUp from '@/pages/SignUp';

import { appRoutesConfig } from './app.routes';
import paths from './paths';
import { RouteObject } from './route.types';

export const routes: RouteObject[] = [
  {
    errorElement: <NotFound />,
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
