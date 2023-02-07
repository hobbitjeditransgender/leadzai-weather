import { useEffect, useState } from 'react';

import { getWeatherByCityName } from '../api';
import { LocationWeather } from '../types/api';

const LOCATION_OPTIONS = ['Lisbon', 'Rio de Janeiro', 'New York', 'Sydney', 'Tokyo'];

const useWeather = () => {
  const [location, setLocation] = useState<LocationWeather>();
  const [isFahrenheit, setIsFahrenheit] = useState(false);

  useEffect(() => {
    (async () => {
      const loc = await getWeatherByCityName(LOCATION_OPTIONS[0]);

      setLocation(loc);
    })();
  }, []);

  return { location, isFahrenheit, LOCATION_OPTIONS, setIsFahrenheit, setLocation };
};

export default useWeather;
