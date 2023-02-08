import React from 'react';

import styled from 'styled-components';

import { formatTemperature } from '../../utils';

interface MainWeatherProps {
  value: number;
  isFahrenheit?: boolean;
}

const TemperatureStyles = styled.div`
  font-size: 86px;
  font-weight: bold;
`;

const Temperature: React.FC<MainWeatherProps> = ({ value, isFahrenheit = false }) => {
  return (
    <TemperatureStyles>
      <span>{formatTemperature(value, isFahrenheit)}</span>
    </TemperatureStyles>
  );
};

export default Temperature;
