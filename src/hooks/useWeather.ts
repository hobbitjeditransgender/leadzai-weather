import { useEffect, useState } from 'react';

import { getWeatherByCityName } from '../api';
import { LocationWeather } from '../types/api';

const LOCATION_OPTIONS = ['Lisbon', 'Rio de Janeiro', 'New York', 'Sydney', 'Tokyo'];

const useWeather = () => {
  const [location, setLocation] = useState<LocationWeather>();
  const [isFahrenheit, setIsFahrenheit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const loc = await getWeatherByCityName(LOCATION_OPTIONS[0]);
        setLocation(loc);
      } catch (error) {
        throw Error('Could not fetch location');
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  const changeSelectedLocation = async (newLocation: string) => {
    setIsLoading(true);

    try {
      const loc = await getWeatherByCityName(newLocation);
      setLocation(loc);
    } catch (error) {
      throw Error('Could not fetch location');
    }

    setIsLoading(false);
  };

  return {
    location,
    isFahrenheit,
    LOCATION_OPTIONS,
    setIsFahrenheit,
    changeSelectedLocation,
    isLoading
  };
};

export default useWeather;
