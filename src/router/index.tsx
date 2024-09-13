import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { routesConfigMap } from './routesConfig';

const router = createBrowserRouter(routesConfigMap);

export const Router = () => {
  return <RouterProvider router={router} />;
};
