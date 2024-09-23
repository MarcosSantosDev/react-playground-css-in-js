import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithTheme } from '@/utils/RTL';

import { Button } from './Button';

describe('Button Component', () => {
  it('should be in the document', () => {
    renderWithTheme(
      <Button type="button" variant="primary" data-testid="button-test">
        Click me!
      </Button>,
    );

    const element = screen.getByTestId('button-test');

    expect(element).toBeInTheDocument();
  });

  it('should call onClick function when clicked', async () => {
    const handleClick = jest.fn();

    renderWithTheme(
      <Button
        type="button"
        variant="primary"
        data-testid="button-test"
        onClick={handleClick}
      >
        Click me!
      </Button>,
    );

    const buttonElement = screen.getByTestId<HTMLButtonElement>('button-test');
    userEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalled();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
