import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import routes from './config/routes';

const router = createBrowserRouter(routes);

export const Router = () => {
  return <RouterProvider router={router} />;
};
