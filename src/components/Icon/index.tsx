import React from 'react';

interface Props {
  src: string;
}

const WeatherIcon: React.FC<Props> = ({ src }) => {
  return <img src={src} alt="weather icon" />;
};

export default WeatherIcon;
