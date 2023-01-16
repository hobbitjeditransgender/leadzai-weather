import { render, screen } from '@testing-library/react';
import Header from '.';
import '@testing-library/jest-dom';

test('render header text', () => {
  render(<Header />);

  expect(screen.getByText(/Weather App/)).toBeInTheDocument();
});
