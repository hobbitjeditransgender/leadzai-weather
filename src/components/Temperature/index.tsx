import React from 'react';

import { formatTemperature } from '../../utils';
import './index.scss';

interface MainWeatherProps {
  value: number;
  isFahrenheit?: boolean;
}

const Temperature: React.FC<MainWeatherProps> = ({ value, isFahrenheit = false }) => {
  return (
    <div className="temperature">
      <span>{formatTemperature(value, isFahrenheit)}</span>
    </div>
  );
};

export default Temperature;
