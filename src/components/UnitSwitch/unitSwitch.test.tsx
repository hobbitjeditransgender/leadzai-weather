import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import Switch from '.';

test('checks switch default value off', () => {
  render(<Switch leftOption="C" rightOption="F" onChange={() => null} />);

  const checkbox = screen.getByRole('checkbox') as HTMLInputElement;

  expect(checkbox.checked).toBeFalsy();
});

test('calls onChange function', async () => {
  const mockFn = jest.fn();

  render(<Switch leftOption="C" rightOption="F" onChange={mockFn} />);

  fireEvent.click(screen.getByRole('checkbox'));

  expect(mockFn).toHaveBeenCalled();
});
