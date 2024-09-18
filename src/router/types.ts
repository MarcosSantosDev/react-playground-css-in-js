import type { RouteObject } from 'react-router-dom';

import { IconNames } from '@/components/Icon';

type AppNavigationRouteObject = RouteObject & {
  navigationIcon?: IconNames;
  navigationTitle?: string;
  children?: AppNavigationRouteObject[];
};

export type { RouteObject, AppNavigationRouteObject };
