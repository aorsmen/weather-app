import Image from '../UI/Image';
// Image imports
import imgVisibility from '../../assets/images/visibility.svg';
import imgHumidity from '../../assets/images/humidity.svg';
import imgPressure from '../../assets/images/pressure.svg';
import imgWind from '../../assets/images/wind.svg';

import styles from './WeatherExtras.module.css';
import { unitType, WeatherWind } from './WeatherInterfaces';

// Getting direction of the wind
const getDirection = (angle: number) => {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const index = Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % 8;
  
    return directions[index];
};

// Calculate wind speed by unit
const calculateWind = (val: number, unit: unitType) => {
    let result = `${val}m/s`;

    if(unit === 'imperial'){
        result = `${(val * 2.237).toFixed(2)}mph`;
    }

    return result;
};

const WeatherExtras: React.FC<{wind: WeatherWind, humidity: number, pressure: number, visibility: number, unit: unitType}> = ({ wind, humidity, pressure, visibility, unit }) => {
    const windArrowDeg = wind.deg + 135;

    return (
        <div className={styles['weather__extras']}>
            <div className={`${styles['weather__extra']} ${styles['weather__extra-humidity']}`}>
                <div className={styles['weather__extra-icon']}>
                    <Image src={imgHumidity} alt="Humidity" title="Humidity" />
                </div>
                <div className={styles['weather__extra-content']}>{` ${humidity}%`}</div>
            </div>
            <div className={`${styles['weather__extra']} ${styles['weather__extra-wind']}`}>
                <div className={styles['weather__extra-icon']}>
                    <Image src={imgWind} alt="Wind" title="Wind" style={{transform: `rotate(${windArrowDeg}deg)`}} />
                </div>
                <div className={styles['weather__extra-content']}>{`${calculateWind(wind.speed, unit)} ${getDirection(wind.deg)}`}</div>
            </div>
            <div className={`${styles['weather__extra']} ${styles['weather__extra-pressure']}`}>
                <div className={styles['weather__extra-icon']}>
                    <Image src={imgPressure} alt="Pressure" title="Pressure" />
                </div>
                <div className={styles['weather__extra-content']}>{`${pressure}hPa`}</div>
            </div>
            <div className={`${styles['weather__extra']} ${styles['weather__extra-visibility']}`}>
                <div className={styles['weather__extra-icon']}>
                    <Image src={imgVisibility} alt="Visibility" title="Visibility" />
                </div>
                <div className={styles['weather__extra-content']}>{`${(visibility / 1000).toFixed(1)}km`}</div>
            </div>
        </div>
    );
};

export default WeatherExtras;