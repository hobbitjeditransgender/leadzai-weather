import { useEffect, useState } from 'react';
import { getWeatherByCityName } from '../api';
import { LocationWeather } from '../types/api';

const LOCATION_OPTIONS = ['Lisbon', 'Rio de Janeiro', 'New York', 'Sydney', 'Tokyo'];

const useWeather = () => {
  const [location, setLocation] = useState<LocationWeather>();
  const [isFahrenheit, setIsFahrenheit] = useState(false);
  const [locationList, setLocationList] = useState<Array<string>>(LOCATION_OPTIONS);

  useEffect(() => {
    (async () => {
      const loc = await getWeatherByCityName(LOCATION_OPTIONS[0]);

      setLocation(loc);
    })();
  }, []);

  return { location, isFahrenheit, locationList, setIsFahrenheit, setLocationList, setLocation };
};

export default useWeather;
