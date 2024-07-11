import styles from './button.module.css';
import React from 'react';
import cn from 'classnames';

class Button extends React.Component {
    render() {
        return (
            <div className={cn(styles.wrapper, { [styles.centered]: this.props.isCentered })}>
                <button className={cn(styles.button, { [styles.mobile100]: this.props.isMobile100 })}>{this.props.caption}</button>
            </div>
        )
    }
}
export default Button;
