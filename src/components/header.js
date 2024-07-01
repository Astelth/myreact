import React from "react";
import Menu from "./menu";
import Image from "./image";
import styles from './header.module.css';
import logo from '../img/logo-cortin.png'

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={styles.wrapper}>
                <Image image={logo} className={styles.logo} />
                <Menu />
            </div>
        )
    }
}

export default Header;