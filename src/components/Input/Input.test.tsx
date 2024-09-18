import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithTheme } from '@/utils/RTL';

import { Input } from './Input';

describe('Input Component', () => {
  it('should render the label and input correctly', () => {
    renderWithTheme(<Input label="Username" name="username" type="text" />);

    // Verify if the label is present
    expect(screen.getByText('Username')).toBeInTheDocument();

    // Verify if the input is present and has the correct name attribute
    expect(screen.getByRole('textbox')).toHaveAttribute('name', 'username');
  });

  it('should accept text input', async () => {
    renderWithTheme(<Input label="Username" name="username" type="text" />);

    const inputElement = screen.getByRole('textbox');
    await userEvent.type(inputElement, 'john_doe');

    // Verify if the input contains the typed value
    expect(inputElement).toHaveValue('john_doe');
  });

  it('should accept different input types', () => {
    renderWithTheme(<Input label="Email" name="email" type="email" />);

    // Verify if the input has the correct type
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email');
  });

  it('should propagate additional props correctly', () => {
    renderWithTheme(
      <Input label="Password" name="password" type="password" required />,
    );

    const inputElement = screen.getByLabelText('Password');

    // Verify if the input is marked as required
    expect(inputElement).toBeRequired();
  });
});
