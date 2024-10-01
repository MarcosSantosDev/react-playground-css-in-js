import { act } from 'react';

import { QueryClientProvider } from '@tanstack/react-query';
import { render, RenderOptions } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import { queryClient } from '@/libs/react-query';
import ThemeProvider from '@/styles/ThemeProvider';

export const renderWithTheme = async (
  ui: React.ReactNode,
  options?: Omit<RenderOptions, 'queries'>,
) => {
  return render(ui, { ...options, wrapper: ThemeProvider });
};

export const renderWithThemeAndBrowserRouter = async (
  ui: React.ReactNode,
  options?: Omit<RenderOptions, 'queries'>,
) => {
  return act(() => {
    render(<BrowserRouter>{ui}</BrowserRouter>, {
      ...options,
      wrapper: ThemeProvider,
    });
  });
};

const wrapper = ({ children }: React.PropsWithChildren) => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>{children}</ThemeProvider>
  </QueryClientProvider>
);

export const renderWithRTQAndBrowserRouter = async (
  ui: React.ReactNode,
  options?: Omit<RenderOptions, 'queries'>,
) => {
  return act(() => {
    render(<BrowserRouter>{ui}</BrowserRouter>, {
      ...options,
      wrapper,
    });
  });
};
