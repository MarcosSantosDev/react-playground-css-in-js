import { publicRoutes, privateRoutes } from './navigationRoutes';
import { RouteObject } from './types';

export const appNavigationRoutesMap =
  privateRoutes.find(route => route.id === 'ROOT')?.children ?? [];

export const routesConfigMap: RouteObject[] = [
  ...publicRoutes,
  ...privateRoutes,
];
