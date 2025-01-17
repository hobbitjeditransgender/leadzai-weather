import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import SunTime from '.';

test('render sunset component', () => {
  render(<SunTime time="13:00" isSunrise={false} />);

  expect(screen.getByText(/Sunset/)).toBeInTheDocument();
});
