import * as React from 'react';

import { ErrorBoundary } from 'react-error-boundary';

import ErrorFallback from './ErrorFallback';

function ErrorBoundaryComponent({ children }: React.PropsWithChildren) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
  );
}

export default ErrorBoundaryComponent;
