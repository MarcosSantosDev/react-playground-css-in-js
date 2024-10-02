import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithTheme } from '@/utils/RTL';

import { Input } from './Input';

describe('Input Component', () => {
  it('should render the label and input correctly', () => {
    renderWithTheme(<Input label="Username" name="username" type="text" />);

    const inputLabel = screen.getByText('Username');
    const inputElement = screen.getByRole('textbox');

    expect(inputLabel).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('name', 'username');
  });

  it('should accept text input', () => {
    renderWithTheme(<Input label="Username" name="username" type="text" />);

    const inputElement = screen.getByRole('textbox');

    userEvent.type(inputElement, 'john_doe');

    expect(inputElement).toHaveValue('john_doe');
  });

  it('should accept different input types', () => {
    renderWithTheme(<Input label="Email" name="email" type="email" />);

    const inputElement = screen.getByRole('textbox');

    expect(inputElement).toHaveAttribute('type', 'email');
  });

  it('should propagate additional props correctly', () => {
    renderWithTheme(
      <Input label="Password" name="password" type="password" required />,
    );

    const inputElement = screen.getByLabelText('Password');

    expect(inputElement).toBeRequired();
  });
});
