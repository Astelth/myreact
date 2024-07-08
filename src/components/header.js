import React from "react";
import Menu from "./menu";
import Image from "./image";
import styles from './header.module.css';
import logo from '../images/logo-cortin.png'
import ReactLogo from "./reactLogo";

class Header extends React.Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <Image image={logo} className={styles.logo} />
                <div className={styles.wrapper}>
                    <Menu />
                    <ReactLogo />
                </div>
            </div>
        )
    }
}

export default Header;