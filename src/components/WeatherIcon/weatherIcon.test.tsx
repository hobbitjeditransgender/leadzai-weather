import { render, screen } from '@testing-library/react';
import WeatherIcon from '.';
import '@testing-library/jest-dom';

const testSrc =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6mxoRhhYJPFewGRQ0hEsXREdonkJwIW9ohQdNWes&s';

test('renders Weather Icon', () => {
  render(<WeatherIcon src={testSrc} />);

  expect(screen.getByRole('img')).toBeInTheDocument();
});
