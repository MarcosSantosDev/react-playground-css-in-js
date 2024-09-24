import { act } from 'react';

import { render, RenderOptions } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import { AppThemeProvider } from '@/styles/AppThemeProvider';

export const renderWithTheme = async (
  ui: React.ReactNode,
  options?: Omit<RenderOptions, 'queries'>,
) => {
  return render(ui, { ...options, wrapper: AppThemeProvider });
};

export const renderWithThemeAndBrowserRouter = async (
  ui: React.ReactNode,
  options?: Omit<RenderOptions, 'queries'>,
) => {
  return act(() => {
    render(<BrowserRouter>{ui}</BrowserRouter>, {
      ...options,
      wrapper: AppThemeProvider,
    });
  });
};
