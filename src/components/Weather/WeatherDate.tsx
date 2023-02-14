import { useContext } from 'react';
import DataContext from '../../store/DataContext';
import styles from './WeatherDate.module.css';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const WeatherDate = () => {
    const { data } = useContext(DataContext);
    const current = new Date(data.dt * 1000);
    const month = current.getMonth();
    const date = current.getDate();
    const day = current.getDay();
    const time = current.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

    return (
        <div className={styles['weather__date']}>
            <time>{`${DAYS[day]}, ${MONTHS[month]} ${date}, ${time}`}</time>
        </div>
    );
};

export default WeatherDate;