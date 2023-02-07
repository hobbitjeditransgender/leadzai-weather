import Dropdown from '../../components/Dropdown';
import Header from '../../components/Header';
import LoadingSpinner from '../../components/Spinner';
import SunTime from '../../components/SunTime';
import Temperature from '../../components/Temperature';
import UnitSwitch from '../../components/UnitSwitch';
import WeatherIcon from '../../components/WeatherIcon';
import useWeather from '../../hooks/useWeather';
import { getWeatherIcon, getHourMinuteTimeFormat } from '../../utils';
import './index.scss';

const WeatherAppHome: React.FC = () => {
  const {
    isFahrenheit,
    location,
    LOCATION_OPTIONS,
    setIsFahrenheit,
    changeSelectedLocation,
    isLoading
  } = useWeather();

  const handleSwitchChange = (e: boolean) => setIsFahrenheit(e);

  return (
    <div className="weather-app-home-wrapper">
      <Header />

      <div className="location-unit-section">
        <div className="location-unit-wrapper">
          <Dropdown options={LOCATION_OPTIONS} onChange={changeSelectedLocation} />
          <UnitSwitch leftOption="°C" rightOption="°F" onChange={handleSwitchChange} />
        </div>
      </div>
      <div className="weather-section">
        {!isLoading && location ? (
          <div>
            <Temperature value={location.main.temp} isFahrenheit={isFahrenheit} />
            <WeatherIcon src={getWeatherIcon(location.weather[0].icon)} />
            <div className="sun-section">
              <SunTime time={getHourMinuteTimeFormat(location.sys.sunrise, location.timezone)} />
              <SunTime
                time={getHourMinuteTimeFormat(location.sys.sunset, location.timezone)}
                isSunrise={false}
              />
            </div>
          </div>
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </div>
  );
};

export default WeatherAppHome;
