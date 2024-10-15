import React from "react";
import styles from './cards.module.css';
import Subhead from "./subhead";
import Image from "./image";
import { address } from "./constants";
import { FaArrowRightLong } from "react-icons/fa6";

class Cards extends React.Component {

  render() {
    return (
      <div className={styles.wrapper}>
        <Subhead title='А ТАКЖЕ ДЛЯ ДИЗАЙН студий' isCentered />
        <div className={styles.list}>
          <div className={styles.item}>
            <div className={styles.imageWrapper}>
              <Image image={address + '/images/svg/label29.svg'} className={styles.image} />
            </div>
            <div className={styles.note}>
              Регулярное добавление новинок
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.imageWrapper}>
              <Image image={address + '/images/svg/crown30.svg'} className={styles.image} />
            </div>
            <div className={styles.note}>
              Эксклюзивные решения
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.imageWrapper}>
              <Image image={address + '/images/svg/catalogues31.svg'} className={styles.image} />
            </div>
            <div className={styles.note}>
              Современные каталоги
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <a href='#' className={styles.link}>
            Современные каталоги
            <FaArrowRightLong className={styles.arrowIcon} />
          </a>
        </div>
      </div>
    )
  }
}

export default Cards;
