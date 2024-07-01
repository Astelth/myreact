import logo from './img/logo-react.svg';
import Header from './components/header';
import styles from './app.module.css';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <Header />
        <header className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className={styles.appLink}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </div>
  );
}

export default App;
