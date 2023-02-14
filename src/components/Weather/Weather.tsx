import { useEffect, useState, Fragment, useContext } from 'react';
import DataContext from '../../store/DataContext';
import useGeolocation from '../../hooks/useGeolocation';
import useHttp from '../../hooks/useHttp';
import { unitType } from './WeatherInterfaces';
import WeatherDate from './WeatherDate';
import WeatherSun from './WeatherSun';
import WeatherExtras from './WeatherExtras';
import WeatherTemp from './WeatherTemp';
import styles from './Weather.module.css';

const Weather = () => {
  const [unit, setUnit] = useState<unitType>('metric');
  const { currentLocation, positionErrorMsg, getLocation } = useGeolocation();
  const { isLoading, loading, errorMsg, sendRequest } = useHttp();
  const { data, setData } = useContext(DataContext);

  // Ask permission for geolocation
  useEffect(() => {
    getLocation();
    // eslint-disable-next-line
  }, []);

  // Get weather data by geolocation
  useEffect(() => {
    if(typeof currentLocation?.latitude !== 'undefined' && typeof currentLocation.longitude !== 'undefined'){
      sendRequest({url: `https://api.openweathermap.org/data/2.5/weather?lat=${currentLocation?.latitude}&lon=${currentLocation?.longitude}&units={APP-ID}`}, setData);
    }
  }, [currentLocation?.latitude, currentLocation?.longitude, sendRequest, setData]);

  const changeUnit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const button = e.target as HTMLButtonElement;
    
    if((button.value === 'metric' || button.value === 'imperial') && button.value !== unit){
      setUnit(button.value);
    }
  };

  return (
    <Fragment>
      {data.cod === 200 && !isLoading && <div className={styles.weather}>
        <div className={styles['weather__inner']}>
            <WeatherDate />
            <div className={styles['weather__location']}>{`${data.name}, ${data.sys.country}`}</div>
            <WeatherTemp unit={unit} />
            <WeatherExtras unit={unit} />
            <WeatherSun />
        </div>
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
