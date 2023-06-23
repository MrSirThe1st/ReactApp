import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState([]);
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${'63f542f91ce48db2b186c660ce600054'}&units=metric`);
      const data = await res.json();
      setWeather(data);
    } catch (e) {
      setError('Could not fetch weather');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()

      if (status !== 'granted') {
        setError('permission to access location was denied')
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      setLat(location.coords.latitude)
      setLong(location.coords.longitude)
      await fetchWeatherData()
    })()
  }, [lat, long])

  return [loading, error, weather];
};
