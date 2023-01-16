import { render, screen, fireEvent } from '@testing-library/react';
import Switch from '.';
import '@testing-library/jest-dom';

test('checks switch default value off', () => {
  render(<Switch leftOption="C" rightOption="F" onChange={() => {}} />);

  expect(screen.getByRole('checkbox').checked).toBeFalsy();
});

test('calls onChange function', async () => {
  const mockFn = jest.fn();

  render(<Switch leftOption="C" rightOption="F" onChange={mockFn} />);

  fireEvent.click(screen.getByRole('checkbox'));

  expect(mockFn).toHaveBeenCalled();
});
