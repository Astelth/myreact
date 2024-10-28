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
          <Button caption='Найти магазин' isIconShopping isCentered />
        </div>
        <div className={styles.inner}>
          <div className={styles.sectionTop}>
            <Button caption='Солнцезащитные системы' image='/images/svg/winlee_orange.svg' isStore isBig />
            <div className={styles.itemBottom}>
              <Button caption='Интернет-магазин жалюзи рулонных штор' image='/images/svg/decoo.svg' isStore isMiddle />
            </div>
          </div>
          <div className={styles.sectionBottom}>
            <Button image='/images/svg/winlee.svg' isStore />
            <Button image='/images/svg/winlee.svg' isStore />
            <Button image='/images/svg/winlee.svg' isStore />
            <div className={styles.item}></div>
            <Button image='/images/svg/winlee.svg' isStore />
          </div>
        </div>
      </div>
    )
  }
}

export default Block;
