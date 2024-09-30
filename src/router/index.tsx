import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import withAppProviders from '@/HOC/withAppProviders';

import routes from './config/routes';

const router = createBrowserRouter(routes);

const Router = () => {
  return (
    <RouterProvider
      router={router}
      fallbackElement={<p>Initial Loading...</p>}
    />
  );
};

export default withAppProviders(Router);
