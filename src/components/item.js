import React from "react";
import Image from "./image";
import { FaArrowRightLong } from "react-icons/fa6";
import styles from './item.module.css';
import cn from 'classnames';

class Item extends React.Component {
    item = this.props.item;
    render() {
        return (
            <div className={cn(styles.item, { [styles.itemHeader]: this.item.text })}>
                <div className={styles.head}>
                    <div className={styles.title}>
                        {this.item.title}
                    </div>
                    <div className={styles.text}>
                        {this.item.text}
                    </div>
                </div>
                <div className={styles.content}>
                    <div>
                        <Image image={this.item.image} className={cn(styles.image, { [styles.no]: this.item.text })} />
                    </div>
                    <div className={styles.subtitle}>
                        {this.item.subtitle}
                        <FaArrowRightLong className={styles.arrowIcon} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Item;