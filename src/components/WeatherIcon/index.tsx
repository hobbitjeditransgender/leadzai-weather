import React from 'react';

interface Props {
  src: string;
}

const WeatherIcon: React.FC<Props> = ({ src }) => {
  return <img src={src} alt="weather icon" width={'120px'} height={'120px'} />;
};

export default WeatherIcon;
