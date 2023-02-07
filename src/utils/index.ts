export const getWeatherIcon = (icon: string) => `http://openweathermap.org/img/wn/${icon}@4x.png`;

export const getHourMinuteTimeFormat = (timestamp: number, secondsTimezoneOffset: number) => {
  const date = new Date((timestamp + secondsTimezoneOffset) * 1000);

  const time = date.toTimeString();

  return time.substring(0, 5);
};

export const fromCelsiusToFahrenheit = (celsiusTemp: number) => {
  const fahrenheitTemp = celsiusTemp * 1.8 + 32;

  return fahrenheitTemp;
};

export const formatTemperature = (value: number, isFahrenheit: boolean) => {
  const formattedTemperature = new Intl.NumberFormat('en', {
    style: 'unit',
    unit: !isFahrenheit ? 'celsius' : 'fahrenheit'
  }).format(isFahrenheit ? Math.floor(fromCelsiusToFahrenheit(value)) : Math.floor(value));

  return formattedTemperature;
};
