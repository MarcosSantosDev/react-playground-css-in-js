import { render, RenderOptions } from '@testing-library/react';

import { AppThemeProvider } from '@/styles/AppThemeProvider';

export const renderWithTheme = (
  ui: React.ReactNode,
  options?: Omit<RenderOptions, 'queries'>,
) => {
  return render(<AppThemeProvider>{ui}</AppThemeProvider>, options);
};
