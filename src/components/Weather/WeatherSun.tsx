import { useContext } from 'react';
import DataContext from '../../store/DataContext';
import styles from './WeatherSun.module.css';
import Image from '../UI/Image';
// Image imports
import imgSunrise from '../../assets/images/sunrise.svg';
import imgSunset from '../../assets/images/sunset.svg';

const WeatherSun = () => {
    const { data } = useContext(DataContext);
    const { sys } = data;
    const sunriseTime = new Date(sys.sunrise * 1000);
    const sr = sunriseTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    const sunsetTime = new Date(sys.sunset * 1000);
    const ss = sunsetTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

    return (
        <div className={styles['weather__sun']}>
            <div className={styles['weather__sun-item']}>
                <div className={styles['weather__sun-icon']}>
                    <Image src={imgSunrise} alt="Sunrise" title="Sunrise" />
                </div>
                <time className={styles['weather__sun-time']}>{sr}</time>
            </div>
            <div className={styles['weather__sun-item']}>
                <div className={styles['weather__sun-icon']}>
                    <Image src={imgSunset} alt="Sunset" title="Sunset" />
                </div>
                <time className={styles['weather__sun-time']}>{ss}</time>
            </div>
        </div>
    );
};

export default WeatherSun;