import { getWeatherByCityName } from '../../api';
import Dropdown from '../../components/Dropdown';
import Header from '../../components/Header';
import WeatherIcon from '../../components/WeatherIcon';
import Temperature from '../../components/Temperature';
import SunTime from '../../components/SunTime';
import UnitSwitch from '../../components/UnitSwitch';
import useWeather from '../../hooks/useWeather';
import { getWeatherIcon, getHourMinuteTimeFormat } from '../../utils';
import './index.scss';

const WeatherAppHome: React.FC = () => {
  const { isFahrenheit, location, locationList, setIsFahrenheit, setLocation } = useWeather();

  const changeSelectedLocation = async (newLocation: string) => {
    const loc = await getWeatherByCityName(newLocation);

    setLocation(loc);
  };

  const handleSwitchChange = (e: boolean) => setIsFahrenheit(e);

  return (
    <div className="weather-app-home-wrapper">
      <Header />

      <div className="location-unit-section">
        <div className="location-unit-wrapper">
          <Dropdown options={locationList} onChange={changeSelectedLocation} />
          <UnitSwitch leftOption="°C" rightOption="°F" onChange={handleSwitchChange} />
        </div>
      </div>
      {location && (
        <div className="weather-section">
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
      )}
    </div>
  );
};

export default WeatherAppHome;
