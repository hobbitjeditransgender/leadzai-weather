import React from 'react';
import { fromCelsiusToFahrenheit } from '../../utils';

interface MainWeatherProps {
  value: number;
  isFahrenheit?: boolean;
}

// weather main text
const MainWeather: React.FC<MainWeatherProps> = ({ value, isFahrenheit = false }) => {
  return (
    <div>
      <span>
        {isFahrenheit ? Math.floor(fromCelsiusToFahrenheit(value)) : Math.floor(value)}{' '}
        {isFahrenheit ? '°F' : '°C'}
      </span>
    </div>
  );
};

export default MainWeather;
