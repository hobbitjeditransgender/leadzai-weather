import {
  getLocalizedTimeFormat,
  fromCelsiusToFahrenheit,
  formatTemperature,
  setStorageLocationWithExpiry,
  getStorageLocation
} from './index';

const key = 'myKey';
const value = 'myValue';
const ttl = 1000;

describe('utility functions', () => {
  describe('getLocalizedTimeFormat', () => {
    it('should format the time correctly', () => {
      const timestamp = 1676191181;
      const secondsTimezoneOffset = -10800;

      const formattedTime = getLocalizedTimeFormat(timestamp, secondsTimezoneOffset);

      expect(formattedTime).toBe('5:39 AM');
    });
  });

  describe('fromCelsiusToFahrenheit', () => {
    it('should convert celsius temperature to fahrenheit correctly', () => {
      const celsiusTemp = 20;
      const expectedFahrenheitTemp = 68;

      expect(fromCelsiusToFahrenheit(celsiusTemp)).toBe(expectedFahrenheitTemp);
    });
  });

  describe('formatTemperature', () => {
    it('should format temperature in celsius correctly', () => {
      const value = 20;
      const isFahrenheit = false;
      const expectedFormattedTemperature = '20°C';

      expect(formatTemperature(value, isFahrenheit)).toBe(expectedFormattedTemperature);
    });

    it('should format temperature in fahrenheit correctly', () => {
      const value = 20;
      const isFahrenheit = true;
      const expectedFormattedTemperature = '68°F';

      expect(formatTemperature(value, isFahrenheit)).toBe(expectedFormattedTemperature);
    });
  });

  describe('setStorageLocationWithExpiry and getStorageLocation functions', () => {
    beforeEach(() => {
      localStorage.clear();
    });

    it('should set and retrieve a value in local storage', () => {
      setStorageLocationWithExpiry(key, value, ttl);

      expect(getStorageLocation(key)).toBe(value);
    });

    it('should return undefined when the item has expired', () => {
      setStorageLocationWithExpiry(key, value, -ttl);

      expect(getStorageLocation(key)).toBeUndefined();
    });

    it('should return undefined when the key does not exist in local storage', () => {
      expect(getStorageLocation(key)).toBeUndefined();
    });
  });
});
