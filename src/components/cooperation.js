import React from "react";
import styles from './cooperation.module.css';
import Subhead from "./subhead";
import Image from "./image";
import Input from "./input";
import { address } from "./constants";
import Button from "./button";

class Cooperation extends React.Component {

    render() {

        return (
            <div className={styles.wrapper}>
                <Subhead title='ПРЕДЛАГАЕМ УДОБНЫЕ УСЛОВИЯ ДЛЯ ДИЛЕРОВ' isNote isCentered
                    text='С нами более 500 партнёров' />
                <div className={styles.list}>
                    <div className={styles.item}>
                        <div className={styles.imageWrapper}>
                            <Image image={address + '/images/svg/video-player 1.svg'} className={styles.image} />
                        </div>
                        <div className={styles.note}>
                            Телеграм канал, где мы
                            делимся опытом (новые изделия,
                            акции, обучающий контент)
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.imageWrapper}>
                            <Image image={address + '/images/svg/manager.svg'} className={styles.image} />
                        </div>
                        <div className={styles.note}>
                            Профессиональные менеджеры и электронный документооборот
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.imageWrapper}>
                            <Image image={address + '/images/svg/warehouse.svg'} className={styles.image} />
                        </div>
                        <div className={styles.note}>
                            Несколько складских комплексов в Крыму
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.imageWrapper}>
                            <Image image={address + '/images/svg/catalogue.svg'} className={styles.image} />
                        </div>
                        <div className={styles.note}>
                            Собственные каталоги для каждого типа изделия
                        </div>
                    </div>
                </div>
                <div className={styles.footer} >
                    <Input placeholder='Телефон' isMobile100 />
                    <Button caption='Стать дилером' isMobile100 />
                </div>
            </div>
        )
    }
}
//console.log(this.props.address)
export default Cooperation;
