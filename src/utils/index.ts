export const getWeatherIcon = (icon: string) => `http://openweathermap.org/img/wn/${icon}@4x.png`;

export const getLocalizedTimeFormat = (timestamp: number, secondsTimezoneOffset: number) => {
  const date = new Date((timestamp + secondsTimezoneOffset) * 1000);

  const timeFormat = new Intl.DateTimeFormat(undefined, {
    hour: 'numeric',
    minute: '2-digit',
    timeZone: 'UTC'
  });

  return timeFormat.format(date);
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

export const setStorageLocationWithExpiry = (key: string, value: unknown, ttl: number) => {
  const now = new Date();

  const item = {
    value: value,
    expiry: now.getTime() + ttl
  };

  localStorage.setItem(key, JSON.stringify(item));
};

export const getStorageLocation = (key: string) => {
  const itemStr = localStorage.getItem(key);

  if (!itemStr) {
    return;
  }
  const item = JSON.parse(itemStr);
  const now = new Date();

  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return;
  }
  return item.value;
};
