import React from "react";
import Image from "./image";
import styles from './footer.module.css';
import logo from '../images/cortin-dark.png'
import cn from 'classnames';
import Link from "./link";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  // статичный массив
  menu = [
    {
      id: 0,
      title: 'Римские шторы',
      link: '#0',
      section: 'Секция 1',
    },
    {
      id: 1,
      title: 'Австрийские шторы',
      link: '#1',
      section: 'Секция 1',
    },
    {
      id: 2,
      title: 'Французские шторы',
      link: '#2',
      section: 'Секция 1',
    },
    {
      id: 3,
      title: 'Прямые шторы',
      link: '#3',
      section: 'Секция 1',
    },
    {
      id: 4,
      title: 'Лондонские шторы',
      link: '#4',
      section: 'Секция 1',
    },
    {
      id: 5,
      title: 'Дилерам',
      link: '#5',
      section: 'Секция 2',
    },
    {
      id: 6,
      title: 'Дизайн студиям',
      link: '#6',
      section: 'Секция 2',
    },
    {
      id: 7,
      title: 'Контакты',
      link: '#7',
      section: 'Секция 2',
    },
    {
      id: 8,
      title: 'Политика ОПД',
      link: '#8',
      section: 'Секция 4',
    },
    {
      id: 9,
      title: 'Дизайн в Студии Вилкина',
      link: '#9',
      section: 'Секция 4',
    },
    {
      id: 10,
      title: 'г. Севастополь, Фиолентовское шоссе 1/2',
      link: '',
      section: 'Секция 3',
    },
    {
      id: 11,
      title: 'cortin@info',
      link: 'mailto:cortin@info.ru',
      section: 'Секция 3',
    },
    {
      id: 12,
      title: '+ 7 (800) 555-45-75',
      link: 'tel:+78005554575',
      section: 'Телефон',
    },
  ]

  render() {
    const menu1 = this.menu.filter(item => item.section === 'Секция 1');
    const menu2 = this.menu.filter(item => item.section === 'Секция 2');
    const menu3 = this.menu.filter(item => item.section === 'Секция 3');
    const menu4 = this.menu.filter(item => item.section === 'Секция 4');
    const menu5 = this.menu.filter(item => item.section === 'Телефон');
    return (
      <div className={styles.wrapper}>
        <div className={cn(styles.section, { [styles.sectionA]: true })} >
          <div className={cn(styles.list, { [styles.listA]: true })} >
            {menu1.map((el) => (
              <Link key={el.id} menuItem={el} />
            ))}
          </div>
          <Image image={logo} className={styles.logo} />
        </div>
        <div className={cn(styles.section, { [styles.sectionB]: true })} >
          <div className={styles.list}>
            {menu2.map((el) => (
              <Link key={el.id} menuItem={el} />
            ))}
          </div>
        </div>
        <div className={cn(styles.section, { [styles.sectionC]: true })} >
          <div className={styles.list}>
            <div className={styles.itemPhone}>
              {menu5.map((el) => (
                <Link key={el.id} menuItem={el} isItemPhoneClass isUnderlineless />
              ))}
            </div>
            {menu3.map((el) => (
              <Link key={el.id} menuItem={el} />
            ))}
          </div>
        </div>
        <div className={cn(styles.section, { [styles.sectionD]: true })} >
          <div className={styles.list}>
            {menu4.map((el) => (
              <Link key={el.id} menuItem={el} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;