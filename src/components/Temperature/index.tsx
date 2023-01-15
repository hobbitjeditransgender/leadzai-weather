import React from 'react';
import { fromCelsiusToFahrenheit } from '../../utils';
import './index.scss';

interface MainWeatherProps {
  value: number;
  isFahrenheit?: boolean;
}

const Temperature: React.FC<MainWeatherProps> = ({ value, isFahrenheit = false }) => {
  return (
    <div className="temperature">
      <span>
        {isFahrenheit ? Math.floor(fromCelsiusToFahrenheit(value)) : Math.floor(value)}{' '}
        {isFahrenheit ? '°F' : '°C'}
      </span>
    </div>
  );
};

export default Temperature;
