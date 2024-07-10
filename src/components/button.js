import styles from './button.module.css';
import React from 'react';

class Button extends React.Component {
    render() {
        const isMobile100Class = this.props.isMobile100 === true ? styles.mobile100 : styles.button;
        return (
            <div className={styles.wrapper}>
                <button className={isMobile100Class}>{this.props.caption}</button>
            </div>
        )
    }
}
export default Button;
