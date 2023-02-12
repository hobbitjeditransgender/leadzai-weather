interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface LocationWeather {
  weather: Weather[];
  main: Main;
  sys: Sys;
  name: string;
  timezone: number;
}

export interface LocationWeatherList {
  [key: string]: LocationWeather;
}
