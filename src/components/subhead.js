import styles from './subhead.module.css';
import React from 'react';
import cn from 'classnames';

class Subhead extends React.Component {
    render() {
        const isCenteredClass = this.props.isCentered === true ? styles.centered : '';
        const isGridAClass = this.props.isGridA === true ? styles.grida : '';
        const isNoteClass = this.props.isNote === true ? styles.note : '';
        return (
            <div className={cn(styles.wrapper, isGridAClass)}>
                <div className={cn(styles.title, isCenteredClass)}>
                    {this.props.title}
                </div>
                <div className={cn(styles.text, isCenteredClass, isNoteClass)}>
                    {this.props.text}
                </div>
            </div>
        )
    }
}
export default Subhead;
