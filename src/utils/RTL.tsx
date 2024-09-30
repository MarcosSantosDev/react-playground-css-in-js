import { act } from 'react';

import { render, RenderOptions } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

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
