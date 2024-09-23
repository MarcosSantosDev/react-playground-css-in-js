import SignInForm from '@/features/auth/sign-in/components/SignInForm';
import SignUpForm from '@/features/auth/sign-up/components/SignUpForm';
import { NotFound } from '@/features/routes/components';
import { AuthLayout, AppLayout } from '@/features/routes/layouts';

import paths from './paths';
import { RouteObject, AppNavigationRouteObject } from './route.types';

export const publicRoutes: RouteObject[] = [
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
];

export const privateRoutes: AppNavigationRouteObject[] = [
  {
    errorElement: <NotFound />,
    id: 'ROOT',
    path: paths.ROOT,
    element: <AppLayout redirectTo="/sign-in" />,
    children: [
      {
        id: 'ROOT_INDEX',
        index: true,
        path: paths.ROOT_INDEX,
        element: <h1>Dashboard</h1>,
        navigationTitle: 'Dashboard',
        navigationIcon: 'layout-dashboard',
      },
      {
        id: 'ROOT_ANALYTICS',
        index: true,
        path: paths.ROOT_ANALYTICS,
        element: <h1>Analytics</h1>,
        navigationTitle: 'Analytics',
        navigationIcon: 'chart-column',
      },
      {
        id: 'ROOT_INVOICE',
        index: true,
        path: paths.ROOT_INVOICE,
        element: <h1>Invoice</h1>,
        navigationTitle: 'Invoice',
        navigationIcon: 'ticket',
      },
      {
        id: 'ROOT_SCHEDULE',
        index: true,
        path: paths.ROOT_SCHEDULE,
        element: <h1>Schedule</h1>,
        navigationTitle: 'Schedule',
        navigationIcon: 'notepad-text',
      },
      {
        id: 'ROOT_CALENDAR',
        index: true,
        path: paths.ROOT_CALENDAR,
        element: <h1>Calendar</h1>,
        navigationTitle: 'Calendar',
        navigationIcon: 'calendar-days',
      },
      {
        id: 'ROOT_MESSAGES',
        index: true,
        path: paths.ROOT_MESSAGES,
        element: <h1>Messages</h1>,
        navigationTitle: 'Messages',
        navigationIcon: 'message-square-dot',
      },
      {
        id: 'ROOT_NOTIFICATION',
        index: true,
        path: paths.ROOT_NOTIFICATION,
        element: <h1>Notification</h1>,
        navigationTitle: 'Notification',
        navigationIcon: 'bell',
      },
      {
        id: 'ROOT_SETTINGS',
        index: true,
        path: paths.ROOT_SETTINGS,
        element: <h1>Settings</h1>,
        navigationTitle: 'Settings',
        navigationIcon: 'settings',
      },
    ],
  },
];

const routes: RouteObject[] = [...publicRoutes, ...privateRoutes];

export default routes;
