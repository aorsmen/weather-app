import { Fragment } from 'react';
import styles from './Loading.module.css';
import Image from './Image';
import loadingGif from '../../assets/images/loading.gif';

const Loading: React.FC<{state: boolean}> = ({ state }) => {
    return (
        <Fragment>
            {state && <div className={styles.loading}>
                <Image src={loadingGif} alt="Loading" width="50" height="50" />
            </div>}
        </Fragment>
    );
};

export default Loading;