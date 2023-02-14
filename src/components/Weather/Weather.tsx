import { useEffect, useState, Fragment } from 'react';
import useGeolocation from '../../hooks/useGeolocation';
import useHttp from '../../hooks/useHttp';
import { WeatherData, unitType } from './WeatherInterfaces';
import WeatherLines from './WeatherLines';
import styles from './Weather.module.css';

const Weather = () => {
  const [unit, setUnit] = useState<unitType>('metric');
  const [weatherData, setWeatherData] = useState<WeatherData>();
  const { currentLocation, positionErrorMsg, getLocation } = useGeolocation();
  const { isLoading, loading, errorMsg, sendRequest } = useHttp();

  // Ask permission for geolocation
  useEffect(() => {
    getLocation();
    // eslint-disable-next-line
  }, []);

  // Get weather data by geolocation
  useEffect(() => {
    if(typeof currentLocation?.latitude !== 'undefined' && typeof currentLocation.longitude !== 'undefined'){
      sendRequest({url: `https://api.openweathermap.org/data/2.5/weather?lat=${currentLocation?.latitude}&lon=${currentLocation?.longitude}&units=metric&appid={APP-ID}`}, setWeatherData);
    }
  }, [currentLocation?.latitude, currentLocation?.longitude, sendRequest]);

  const changeUnit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const button = e.target as HTMLButtonElement;
    
    if((button.value === 'metric' || button.value === 'imperial') && button.value !== unit){
      setUnit(button.value);
    }
  };

  return (
    <Fragment>
      {weatherData && !isLoading && <div className={styles.weather}>
        <WeatherLines weather={weatherData.weather} main={weatherData.main} unit={unit} name={weatherData.name} sys={weatherData.sys} wind={weatherData.wind} visibility={weatherData.visibility} dt={weatherData.dt} />
        <div className={styles['weather__units']}>
          <button onClick={changeUnit} className={`${styles['weather__unit']} ${unit === 'metric' ? styles['weather__unit--active'] : ''}`} type="button" value="metric">Metric: °C, m/s</button>
          <button onClick={changeUnit} className={`${styles['weather__unit']} ${unit === 'imperial' ? styles['weather__unit--active'] : ''}`} type="button" value="imperial">Imperial: °F, mph</button>
        </div>
      </div>}
      {positionErrorMsg}
      {errorMsg}
      {loading}
    </Fragment>
  );
}

export default Weather;
