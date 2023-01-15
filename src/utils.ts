export const getWeatherIcon = (icon: string) => `http://openweathermap.org/img/wn/${icon}@4x.png`;

export const getHourMinuteTimeFormat = (timestamp: number) => {
  const date = new Date(timestamp * 1000);

  const time = date.toLocaleTimeString();

  return time.substring(0, 5);
};

export const fromCelsiusToFahrenheit = (celsiusTemp: number) => {
  const fahrenheitTemp = celsiusTemp * 1.8 + 32;

  return fahrenheitTemp;
};
