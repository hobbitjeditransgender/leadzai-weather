import { LocationWeather } from '../types/api';

const apiConfig = {
  baseUrl: 'https://api.openweathermap.org/data/2.5',
  params: '&units=metric',
  exclude: 'current,minutely,hourly,alerts',
  apiId: process.env.REACT_APP_API_KEY
};

export const getWeatherByCityName = async (name: string): Promise<LocationWeather | boolean> => {
  const response = await fetch(
    `${apiConfig.baseUrl}/weather?q=${name}${apiConfig.params}&appid=${apiConfig.apiId}`
  );

  if (response.status !== 200 || !response.ok) {
    return false;
  }
  return response.json();
};
