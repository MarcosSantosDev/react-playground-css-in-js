import type { RouteObject } from 'react-router-dom';

import type { IconNames } from '@/components/ui/Icon/Icon';

type AppNavigationRouteObject = RouteObject & {
  navigationIcon?: IconNames;
  navigationTitle?: string;
  children?: AppNavigationRouteObject[];
};

export type { RouteObject, AppNavigationRouteObject };
