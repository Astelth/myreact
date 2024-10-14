import React from "react";
import Item from "./item";
import styles from './list.module.css';
import Subhead from "./subhead";

class List extends React.Component {
  render() {
    let qwe1, qwe2;
    qwe1 = this.props.list.length / 2 + 1;
    if (this.props.list.length % 2 === 0)
      qwe2 = this.props.list.length / 2 - 1
    else
      qwe2 = this.props.list.length / 2;
    if (this.props.list.length > 0)
      return (
        <div className={styles.wrapper}>
          <div className={styles.inner}>
            <div className={styles.item}>
              <Subhead title='ИНДИВИДУАЛЬНОЕ ИЗГОТОВЛЕНИЕ ШТОР' is-Centered isGridA
                text=' 8 видов систем, более 1000 видов тканей, и множество дополнительных возможностей позволяют создать реально уникальную и уютную атмосферу в вашем доме' />
            </div>
            <div className={styles.item}>
              {this.props.list.slice(0, 1).map((el) => (
                <Item key={el.id} item={el} isReversed />
              ))}
            </div>
            <div className={styles.items}>
              {this.props.list.slice(1, qwe1).map((el) => (
                <Item key={el.id} item={el} />
              ))}
            </div>
            <div className={styles.items}>
              {this.props.list.slice(qwe2 * -1).map((el) => (
                <Item key={el.id} item={el} isReversed />
              ))}
            </div>
          </div>
        </div>
      )
    else
      return (
        <div className={styles.wrapper}>
          <h3>Нет данных для вывода</h3>
        </div>
      )
  }
}

export default List;
