import { useEffect, useState } from 'react';

import { getWeatherByCityName } from '../api';
import { LocationWeather } from '../types/api';

const LOCATION_OPTIONS = ['Lisbon', 'Rio de Janeiro', 'New York', 'Sydney', 'Tokyo'];

const useWeather = () => {
  const [location, setLocation] = useState<LocationWeather>();
  const [isFahrenheit, setIsFahrenheit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    console.log('i fire once');
    // eslint-disable-next-line no-debugger
    // debugger;
    // changeSelectedLocation(LOCATION_OPTIONS[0]);
  }, []);

  const changeSelectedLocation = async (newLocation: string) => {
    setIsError(false);
    setIsLoading(true);

    try {
      const loc = await getWeatherByCityName(newLocation);

      if (!loc) {
        setIsError(!loc);
        return;
      }

      setLocation(loc as LocationWeather);
    } catch (error) {
      setIsLoading(false);
      throw new Error('Could not fetch location');
    }

    setIsLoading(false);
  };

  return {
    location,
    isFahrenheit,
    LOCATION_OPTIONS,
    setIsFahrenheit,
    changeSelectedLocation,
    isLoading,
    isError
  };
};

export default useWeather;
