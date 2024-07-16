import React from "react";
import styles from './block.module.css';
import Subhead from "./subhead";
import Button from "./button";

class Block extends React.Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <div className={styles.inner}>
                    <Subhead title='КУПИТЬ НАШИ ИЗДЕЛИЯ МОЖНО' isCentered isWhite text='В магазинах нашей дилерской сети в вашем городе' />
                    <Button caption='Найти магазин' isCentered />
                </div>
                <div className={styles.inner}>
                    <div className={styles.section}>
                        <div className={styles.item}>
                        </div>
                    </div>
                    <div className={styles.section}>
                        <div className={styles.item}>
                        </div>
                    </div>
                    <div className={styles.section}>
                        <div className={styles.item}>
                        </div>
                        <div className={styles.item}>
                        </div>
                        <div className={styles.item}>
                        </div>
                        <div className={styles.item}>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Block;
