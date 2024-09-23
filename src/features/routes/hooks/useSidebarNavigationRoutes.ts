import paths from '@/router/config/paths';
import type { AppNavigationRouteObject } from '@/router/config/route.types';
import { privateRoutes } from '@/router/config/routes';

export const useSidebarNavigationRoutes = (): AppNavigationRouteObject[] => {
  return privateRoutes.find(route => route.id === paths.ROOT)?.children ?? [];
};
