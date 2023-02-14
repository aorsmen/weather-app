import Image from '../UI/Image';
// Image imports
import imgTempMin from '../../assets/images/temp_min.svg';
import imgTempMax from '../../assets/images/temp_max.svg';

import styles from './WeatherTemp.module.css';
import { WeatherObject, WeatherMain, unitType } from './WeatherInterfaces';

// Rounding and converting temperature by unit
const calculateTemp = (val: number, unit: unitType) => {
    let result: string;

    if(unit === 'imperial'){
        result = `${Math.round(val * 9/5) + 32}°F`;
    }else{
        result = `${Math.round(val)}°C`;
    }
  
    return result;
};

const WeatherTemp: React.FC<{weather: WeatherObject[], main: WeatherMain, unit: unitType}> = ({ weather, main, unit }) => {
    const [ weatherObj ] = weather;
console.log(imgTempMin);
    return (
        <div className={styles['weather__temp']}>
            <div className={styles['weather__temp-detail']}>
                <div className={styles['weather__symbol']}>
                    <Image src={`http://openweathermap.org/img/wn/${weatherObj.icon}@2x.png`} alt={weatherObj.description} />
                </div>
                <div className={styles['weather__temperature']}>
                    <span data-testid="tempDef">{calculateTemp(main.temp, unit)}</span>
                    <span className={styles['weather__temp-desc']}>{` / ${weatherObj.description}`}</span>
                </div>
            </div>
            <div className={styles['weather__temp-minmax']}>
                <div className={styles['weather__temp-item']}>
                    <Image src={imgTempMin} alt="Minimum" title="Minimum" />
                    <span data-testid="tempMin">{calculateTemp(main.temp_min, unit)}</span>
                </div>
                <div className={styles['weather__temp-item']}>
                    <Image src={imgTempMax} alt="Maximum" title="Maximum" />
                    <span data-testid="tempMax">{calculateTemp(main.temp_max, unit)}</span>
                </div>
            </div>
            <div data-testid="tempFeels" className={styles['weather__temp-feels']}>{`Feels like ${calculateTemp(main.feels_like, unit)}`}</div>
        </div>
    );
};

export default WeatherTemp;