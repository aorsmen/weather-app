import { Fragment } from 'react';
import styles from './ErrorMessage.module.css';

const ErrorMessage: React.FC<{msg: string}> = ({ msg }) => {
    return (
        <Fragment>
            {msg && <div className={styles.error}>{msg}</div>}
        </Fragment>
    );
}

export default ErrorMessage;