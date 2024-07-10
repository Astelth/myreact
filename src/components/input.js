import styles from './input.module.css';
import React from 'react';

class Input extends React.Component {
    render() {
        const isMobile100Class = this.props.isMobile100 === true ? styles.mobile100 : styles.input;
        return (
            <div className={styles.wrapper}>
                <input type='text' placeholder={this.props.placeholder} className={isMobile100Class} />
            </div>
        )
    }
}
export default Input;
