import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { renderWithTheme } from '@/utils/RTL';

import { CustomLink } from './CustomLink';

describe('CustomLink Component', () => {
  it('renders correctly with given props', () => {
    renderWithTheme(
      <MemoryRouter>
        <CustomLink to="/test">Test Link</CustomLink>
      </MemoryRouter>,
    );

    const linkElement = screen.getByText(/test link/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.closest('a')).toHaveAttribute('href', '/test');
  });

  it('renders with additional className', () => {
    renderWithTheme(
      <MemoryRouter>
        <CustomLink to="/test" className="custom-class">
          Test Link
        </CustomLink>
      </MemoryRouter>,
    );

    const linkElement = screen.getByText(/test link/i);
    expect(linkElement).toHaveClass('custom-class');
  });

  it('navigates to the correct route on click', () => {
    renderWithTheme(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route
            path="/"
            element={<CustomLink to="/test">Test Link</CustomLink>}
          />
          <Route path="/test" element={<div>Test Page</div>} />
        </Routes>
      </MemoryRouter>,
    );

    const linkElement = screen.getByText(/test link/i);

    userEvent.click(linkElement);

    expect(screen.getByText(/test page/i)).toBeInTheDocument();
  });
});
