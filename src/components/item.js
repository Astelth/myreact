import React from "react";
import Image from "./image";
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import styles from './item.module.css';


class Item extends React.Component {
    constructor(props) {
        super(props);
    }
    item = this.props.item;
    render() {
        return (
            <div className={styles.item}>
                <FaArrowRightLong className={styles.arrowIcon} />
                <IoHammerSharp className='edit-icon' />
                <h3 className="user-name">{this.item.title} {this.item.subtitle}</h3>
                <p>{this.item.description}</p>
                <Image image={this.item.image} className={styles.image} />
            </div>
        )
    }
}

export default Item;