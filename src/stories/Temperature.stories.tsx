import Temperature from '../components/Temperature';

export default {
  title: 'Temperature',
  component: Temperature
};

export const Default = () => <Temperature value={12} isFahrenheit />;
