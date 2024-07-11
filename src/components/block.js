import React from "react";
import styles from './cards.module.css';
import Subhead from "./subhead";
import Button from "./button";

class Block extends React.Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <Subhead title='КУПИТЬ НАШИ ИЗДЕЛИЯ МОЖНО' isCentered isWhite text='В магазинах нашей дилерской сети в вашем городе' />
                <Button caption='Найти магазин' isCentered />
            </div>
        )
    }
}

export default Block;
