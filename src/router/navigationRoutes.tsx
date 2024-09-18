import SignInForm from '@/features/auth/sign-in/components/SignInForm';
import SignUpForm from '@/features/auth/sign-up/components/SignUpForm';
import NotFound from '@/features/routes/components/NotFound';
import AppAuthLayout from '@/features/routes/layouts/AppLayout';
import AuthLayout from '@/features/routes/layouts/AuthLayout';

import routePaths from './routePaths';
import { RouteObject, AppNavigationRouteObject } from './types';

export const publicRoutes: RouteObject[] = [
  {
    id: 'ROOT_SIGN_IN',
    path: routePaths.ROOT_SIGN_IN,
    element: (
      <AuthLayout redirectTo="/">
        <SignInForm />
      </AuthLayout>
    ),
  },
  {
    id: 'ROOT_SIGN_UP',
    path: routePaths.ROOT_SIGN_UP,
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
    path: routePaths.ROOT,
    element: <AppAuthLayout redirectTo="/sign-in" />,
    children: [
      {
        id: 'ROOT_INDEX',
        index: true,
        path: routePaths.ROOT_INDEX,
        element: <h1>Dashboard</h1>,
        navigationTitle: 'Dashboard',
        navigationIcon: 'layout-dashboard',
      },
      {
        id: 'ROOT_ANALYTICS',
        index: true,
        path: routePaths.ROOT_ANALYTICS,
        element: <h1>Analytics</h1>,
        navigationTitle: 'Analytics',
        navigationIcon: 'chart-column',
      },
      {
        id: 'ROOT_INVOICE',
        index: true,
        path: routePaths.ROOT_INVOICE,
        element: <h1>Invoice</h1>,
        navigationTitle: 'Invoice',
        navigationIcon: 'ticket',
      },
      {
        id: 'ROOT_SCHEDULE',
        index: true,
        path: routePaths.ROOT_SCHEDULE,
        element: <h1>Schedule</h1>,
        navigationTitle: 'Schedule',
        navigationIcon: 'notepad-text',
      },
      {
        id: 'ROOT_CALENDAR',
        index: true,
        path: routePaths.ROOT_CALENDAR,
        element: <h1>Calendar</h1>,
        navigationTitle: 'Calendar',
        navigationIcon: 'calendar-days',
      },
      {
        id: 'ROOT_MESSAGES',
        index: true,
        path: routePaths.ROOT_MESSAGES,
        element: <h1>Messages</h1>,
        navigationTitle: 'Messages',
        navigationIcon: 'message-square-dot',
      },
      {
        id: 'ROOT_NOTIFICATION',
        index: true,
        path: routePaths.ROOT_NOTIFICATION,
        element: <h1>Notification</h1>,
        navigationTitle: 'Notification',
        navigationIcon: 'bell',
      },
      {
        id: 'ROOT_SETTINGS',
        index: true,
        path: routePaths.ROOT_SETTINGS,
        element: <h1>Settings</h1>,
        navigationTitle: 'Settings',
        navigationIcon: 'settings',
      },
    ],
  },
];
