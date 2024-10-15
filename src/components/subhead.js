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
        <div className={cn(styles.title, isCenteredClass, { [styles.none]: !this.props.title }, { [styles.white]: this.props.isWhite })}>
          {this.props.title}
        </div>
        <div className={cn(styles.text, isCenteredClass, isNoteClass, { [styles.none]: !this.props.text })}>
          {this.props.text}
        </div>
      </div>
    )
  }
}
export default Subhead;
