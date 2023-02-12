import React from 'react';

import Dropdown from '../../components/Dropdown';
import Header from '../../components/Header';
import LoadingSpinner from '../../components/Spinner';
import SunTime from '../../components/SunTime';
import Temperature from '../../components/Temperature';
import UnitSwitch from '../../components/UnitSwitch';
import WeatherIcon from '../../components/WeatherIcon';
import useWeather from '../../hooks/useWeather';
import { getWeatherIcon, getLocalizedTimeFormat } from '../../utils';
import {
  LocationUnitSection,
  LocationUnitWrapper,
  SunSection,
  WeatherAppHomeWrapper,
  WeatherSection
} from './WeatherAppHomeComponents';

const WeatherAppHome: React.FC = () => {
  const {
    isFahrenheit,
    location,
    LOCATION_OPTIONS,
    setIsFahrenheit,
    changeSelectedLocation,
    isLoading,
    isError
  } = useWeather();

  const handleSwitchChange = (e: boolean) => setIsFahrenheit(e);

  return (
    <WeatherAppHomeWrapper>
      <Header />
      <LocationUnitSection>
        <LocationUnitWrapper>
          <Dropdown options={LOCATION_OPTIONS} onChange={changeSelectedLocation} />
          <UnitSwitch leftOption="°C" rightOption="°F" onChange={handleSwitchChange} />
        </LocationUnitWrapper>
      </LocationUnitSection>
      <WeatherSection>
        {isError ? (
          <div>Could not fetch location, please try another one</div>
        ) : !isLoading && location ? (
          <div>
            <Temperature value={location.main.temp} isFahrenheit={isFahrenheit} />
            <WeatherIcon src={getWeatherIcon(location.weather[0].icon)} />
            <SunSection>
              <SunTime time={getLocalizedTimeFormat(location.sys.sunrise, location.timezone)} />
              <SunTime
                time={getLocalizedTimeFormat(location.sys.sunset, location.timezone)}
                isSunrise={false}
              />
            </SunSection>
          </div>
        ) : (
          <LoadingSpinner />
        )}
      </WeatherSection>
    </WeatherAppHomeWrapper>
  );
};

export default WeatherAppHome;
