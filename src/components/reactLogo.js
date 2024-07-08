import logo from '../images/logo-react.svg';
import styles from './reactLogo.module.css';

function ReactLogo() {
    return (
        <div className={styles.wrapper}>
            <img src={logo} className={styles.appLogo} alt="logo" />
        </div>
    );
}

export default ReactLogo;
