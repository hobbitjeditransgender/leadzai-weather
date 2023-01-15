import { getWeatherByCityName } from '../../api';
import Dropdown from '../../components/Dropdown';
import Header from '../../components/Header';
import Icon from '../../components/Icon';
import MainWeather from '../../components/MainWeather';
import SunTime from '../../components/SunTime';
import Switch from '../../components/Switch';
import useWeather from '../../hooks/useWeather';
import { getWeatherIcon, getHourMinuteTimeFormat } from '../../utils';

const WeatherAppHome: React.FC = () => {
  const { isFahrenheit, location, locationList, setIsFahrenheit, setLocation } = useWeather();

  const changeSelectedLocation = async (newLocation: string) => {
    const loc = await getWeatherByCityName(newLocation);

    setLocation(loc);
  };

  const handleSwitchChange = (e: boolean) => setIsFahrenheit(e);

  return (
    <div>
      <Header />
      <div>
        <Dropdown options={locationList} onChange={changeSelectedLocation} />
        <Switch leftOption="C" rightOption="F" onChange={handleSwitchChange} />
      </div>
      {location && (
        <div>
          <MainWeather value={location.main.temp} isFahrenheit={isFahrenheit} />
          <Icon src={getWeatherIcon(location.weather[0].icon)} />
          <div>
            <SunTime time={getHourMinuteTimeFormat(location.sys.sunrise)} />
            <SunTime time={getHourMinuteTimeFormat(location.sys.sunset)} isSunrise={false} />
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherAppHome;
