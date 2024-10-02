import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { vi } from 'vitest';

import paths from '@/router/config/paths';
import { renderWithRTQAndBrowserRouter } from '@/utils/RTL';

import Sidebar from './Sidebar';

const mockNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
  const RRD = await vi.importActual('react-router-dom');
  return {
    ...RRD,
    useNavigate: () => mockNavigate,
  };
});

describe('Sidebar component', () => {
  it('should render correctly', async () => {
    // arrange
    await renderWithRTQAndBrowserRouter(<Sidebar />);
    // assert
    const navElement = screen.getByText('Dashboard');
    expect(navElement).toBeInTheDocument();
  });

  it('should be call navigate when click the nav item "Dashboard"', async () => {
    // arrange
    await renderWithRTQAndBrowserRouter(<Sidebar />);
    // act
    const navElement = screen.getByText('Dashboard');
    userEvent.click(navElement);
    // assert
    expect(mockNavigate).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith(paths.ROOT_INDEX);
  });
});
