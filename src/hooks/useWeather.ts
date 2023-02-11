import { useEffect, useState } from 'react';

import { getWeatherByCityName } from '../api';
import { LocationWeather } from '../types/api';
import { getStorageLocation, setStorageLocationWithExpiry } from '../utils';

const LOCATION_OPTIONS = ['Lisbon', 'Rio de Janeiro', 'New York', 'Sydney', 'Tokyo'];

const useWeather = () => {
  const [location, setLocation] = useState<LocationWeather>();
  const [isFahrenheit, setIsFahrenheit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let ignore = false;

    changeSelectedLocation(LOCATION_OPTIONS[0], ignore);

    return () => {
      ignore = true;
    };
  }, []);

  const changeSelectedLocation = async (newLocation: string, ignore = false) => {
    setIsError(false);
    setIsLoading(true);

    const chachedLocation = getStorageLocation(newLocation);

    if (chachedLocation) {
      if (!ignore) {
        const loc = JSON.parse(chachedLocation);
        setIsLoading(false);
        setLocation(loc);
      }
      return;
    }
    try {
      const loc = await getWeatherByCityName(newLocation);

      if (!loc) {
        setIsError(!loc);
        return;
      }

      if (!ignore) {
        setStorageLocationWithExpiry((loc as LocationWeather).name, JSON.stringify(loc), 1000000);

        setLocation(loc as LocationWeather);
      }
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
