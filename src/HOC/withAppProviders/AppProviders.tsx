import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Suspense from '@/components/Suspense/Suspense';
import { queryClient } from '@/libs/react-query';
import ThemeProvider from '@/styles/ThemeProvider';

const AppProviders = ({ children }: React.PropsWithChildren) => {
  return (
    <Suspense>
      <HelmetProvider>
        <ThemeProvider>
          <QueryClientProvider client={queryClient}>
            <ToastContainer />
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </ThemeProvider>
      </HelmetProvider>
    </Suspense>
  );
};

export default AppProviders;
