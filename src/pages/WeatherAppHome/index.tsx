import Dropdown from '../../components/Dropdown';
import Header from '../../components/Header';
import Icon from '../../components/Icon';
import MainWeather from '../../components/MainWeather';
import SunTime from '../../components/SunTime';
import Switch from '../../components/Switch';

// main app compoenent
const WeatherAppHome: React.FC = () => {
  return (
    <div>
      <Header />
      <div>
        <Dropdown />
        <Switch />
      </div>
      <MainWeather value={'15 C'} />
      <Icon src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6mxoRhhYJPFewGRQ0hEsXREdonkJwIW9ohQdNWes&s" />
      <div>
        <SunTime time={'06:00'} />
        <SunTime time={'17:00'} />
      </div>
    </div>
  );
};

export default WeatherAppHome;
