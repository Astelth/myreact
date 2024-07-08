import styles from './subhead.module.css';
import React from 'react';

class Subhead extends React.Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <div className={this.props.titleClassName}>
                    {this.props.title}
                </div>
                <div className={this.props.textClassName}>
                    {this.props.text}
                </div>
            </div>
        )
    }
}
export default Subhead;
