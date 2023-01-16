import { render, screen } from '@testing-library/react';
import Temperature from '.';
import '@testing-library/jest-dom';

test('render celsius temperature', () => {
  render(<Temperature value={15} isFahrenheit={false} />);

  expect(screen.getByText(/°C/)).toBeInTheDocument();
  expect(screen.getByText(/15/)).toBeInTheDocument();
});
