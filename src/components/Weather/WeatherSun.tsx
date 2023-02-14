import styles from './WeatherSun.module.css';
import Image from '../UI/Image';
// Image imports
import imgSunrise from '../../assets/images/sunrise.svg';
import imgSunset from '../../assets/images/sunset.svg';
import { WeatherSys } from './WeatherInterfaces';

export type WeatherSunType = Omit<WeatherSys, 'country'>;

const WeatherSun: React.FC<WeatherSunType> = ({ sunrise, sunset }) => {
    const sunriseTime = new Date(sunrise * 1000);
    const sr = sunriseTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    const sunsetTime = new Date(sunset * 1000);
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