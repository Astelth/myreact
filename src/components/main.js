import React from "react";
import styles from './main.module.css';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={styles.wrapper}>
                тест 
            </div>
        )
    }
}

export default Main;
