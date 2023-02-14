import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.app__header}>
            <h1 className={styles.app__title}>Weather</h1>
        </div>
    );
};

export default Header;