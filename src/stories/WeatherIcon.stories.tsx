import WeatherIcon from '../components/WeatherIcon';
import { getWeatherIcon } from '../utils';

export default {
  title: 'WeatherIcon',
  component: WeatherIcon
};

export const Default = () => <WeatherIcon src={getWeatherIcon('04d')} />;
