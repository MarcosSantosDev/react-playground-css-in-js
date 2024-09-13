import { render, screen } from '@testing-library/react';

import About from './About';

describe('<About />', () => {
  it('should contains in the document', () => {
    render(<About />);
    const element = screen.getByText(/Welcome to About!/i);
    expect(element).toBeInTheDocument();
  });
});
