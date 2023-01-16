import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Header from '.';

test('render header text', () => {
  render(<Header />);

  expect(screen.getByText(/Weather App/)).toBeInTheDocument();
});
