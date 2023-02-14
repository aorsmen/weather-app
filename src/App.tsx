import Weather from './components/Weather/Weather';
import Header from './components/UI/Header';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Weather />
    </div>
  );
}

export default App;
