import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ErrorBoundary, Suspense } from '@/components/app';
import { queryClient } from '@/libs/react-query';
import ThemeProvider from '@/styles/ThemeProvider';

const AppProviders = ({ children }: React.PropsWithChildren) => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Suspense>
          <HelmetProvider>
            <ErrorBoundary>
              <QueryClientProvider client={queryClient}>
                <ToastContainer />
                {children}
                <ReactQueryDevtools initialIsOpen={false} />
              </QueryClientProvider>
            </ErrorBoundary>
          </HelmetProvider>
        </Suspense>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default AppProviders;
