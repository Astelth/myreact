import React from "react";
import Item from "./item";
import styles from './list.module.css';

class List extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.list.length > 0)
            return (
                <div className={styles.wrapper}>
                    <div className={styles.item}>
                        <div className={styles.title}>
                            ИНДИВИДУАЛЬНОЕ ИЗГОТОВЛЕНИЕ ШТОР
                        </div>
                        <div className={styles.description}>
                            8 видов систем, более 1000 видов тканей, и множество дополнительных возможностей 
                            позволяют создать реально уникальную и уютную атмосферу в вашем доме
                        </div>
                    </div>
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
