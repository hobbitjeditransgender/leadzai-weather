import { render, screen, fireEvent } from '@testing-library/react';
import Dropdown from '.';
import '@testing-library/jest-dom';

const LOCATION_OPTIONS = ['Lisbon', 'Rio de Janeiro', 'New York', 'Sydney', 'Tokyo'];

test('renders dropdown properly', () => {
  render(<Dropdown options={LOCATION_OPTIONS} onChange={() => null} />);

  expect(screen.getByText(/Lisbon/)).toBeInTheDocument();
});

test('calls onChange function', async () => {
  const mockFn = jest.fn();

  render(<Dropdown options={LOCATION_OPTIONS} onChange={mockFn} />);

  fireEvent.change(screen.getByRole('combobox'), {
    target: { value: 'Rio de Janeiro' }
  });

  expect(mockFn).toHaveBeenCalledTimes(1);
});
