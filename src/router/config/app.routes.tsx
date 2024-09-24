import paths from './paths';
import { RouteObject, AppNavigationRouteObject } from './route.types';

export const appRoutesNavigation: AppNavigationRouteObject[] = [
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
];

const getRoutesConfig = (routes: AppNavigationRouteObject[]): RouteObject[] => {
  return routes.map(({ id, index, path, element }) => ({
    id,
    index,
    path,
    element,
  }));
};

export const appRoutesConfig = getRoutesConfig(appRoutesNavigation);
