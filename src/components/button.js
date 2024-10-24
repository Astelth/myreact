import styles from './button.module.css';
import React from 'react';
import cn from 'classnames';

class Button extends React.Component {
  render() {
    return (
      <div className={cn(styles.wrapper, { [styles.centered]: this.props.isCentered },
        { [styles.storeClass]: this.props.isStore }, { [styles.big]: this.props.isBig }, { [styles.middle]: this.props.isMiddle },
      )}>
        <button className={cn(styles.button, { [styles.mobile100]: this.props.isMobile100 })}>
          <span className={cn(styles.icon, { [styles.iconShare]: this.props.isIconShare })} ></span>
          <span>{this.props.caption}</span>
        </button>
        <button className={styles.buttonStore}>
          <span><img className={styles.image} src={this.props.image} alt='изображение' /></span>
          <span className={styles.caption}>{this.props.caption}</span>
        </button>
      </div>
    )
  }
}
export default Button;
