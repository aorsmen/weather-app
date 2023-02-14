import DataProvider from './store/DataProvider';
import Weather from './components/Weather/Weather';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <DataProvider>
        <Weather />
      </DataProvider>
      <Footer />
    </div>
  );
}

export default App;
