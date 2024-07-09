import styles from './subhead.module.css';
import React from 'react';
import cn from 'classnames';

class Subhead extends React.Component {
    constructor(props) {
        super(props);
        isCentered: false,
    }
    render() {
        return (
            <div className={styles.wrapper}>
                <div className={cn(styles.title, { [styles.centered]: isCentered })}>
                    {this.props.title}
                </div>
                <div className={cn(styles.text, { [styles.centered]: isCentered })}>
                    {this.props.text}
                </div>
            </div>
        )
    }
}
export default Subhead;
