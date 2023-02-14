import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.app__footer}>
            developed by <a href="http://www.codeeffect.co.uk">Code Effect</a>
        </footer>
    );
};

export default Footer;