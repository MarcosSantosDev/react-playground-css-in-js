import { publicRoutes, privateRoutes } from './navigationRoutes';
import { AppNavigationRouteObject, RouteObject } from './types';

export const appNavigationRoutesMap: AppNavigationRouteObject[] =
  privateRoutes.find(route => route.id === 'ROOT')?.children ?? [];

export const routesConfigMap: RouteObject[] = [
  ...publicRoutes,
  ...privateRoutes,
];
