import type { RouteObject } from 'react-router-dom';

type Icon = 'icon-1' | 'icon-2' | 'icon-3' | 'icon-4';

type AppNavigationRouteObject = RouteObject & {
  navigationIcon?: Icon;
  navigationTitle?: string;
  children?: AppNavigationRouteObject[];
};

export type { RouteObject, AppNavigationRouteObject };
