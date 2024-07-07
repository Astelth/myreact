import React from "react";
import Item from "./item";
import styles from './list.module.css';

class List extends React.Component {
    render() {
        if (this.props.list.length > 0)
            return (
                <div className={styles.wrapper}>
                    {this.props.list.map((el) => (
                        <Item key={el.id} item={el} />
                    ))}
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
