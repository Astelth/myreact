import Header from './components/header';
import Main from './components/main';
import styles from './app.module.css';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
