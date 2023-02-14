import WeatherDate from './WeatherDate';
import WeatherSun from './WeatherSun';
import WeatherExtras from './WeatherExtras';
import WeatherTemp from './WeatherTemp';
import styles from './WeatherLines.module.css';
import { WeatherData, unitType } from './WeatherInterfaces';

interface WeatherDataLines extends WeatherData {
    unit: unitType;
};

const WeatherLines: React.FC<WeatherDataLines> = ({ weather, main, unit, name, sys, wind, visibility, dt }) => {
    return (
        <div className={styles['weather__inner']}>
            <WeatherDate dt={dt} />
            <div className={styles['weather__location']}>{`${name}, ${sys.country}`}</div>
            <WeatherTemp weather={weather} main={main} unit={unit} />
            <WeatherExtras wind={wind} humidity={main.humidity} pressure={main.pressure} visibility={visibility} unit={unit} />
            <WeatherSun sunrise={sys.sunrise} sunset={sys.sunset} />
        </div>
    );
};

export default WeatherLines;