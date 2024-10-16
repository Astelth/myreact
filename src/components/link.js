import React from "react";
import styles from './link.module.css';
import cn from 'classnames';

class Link extends React.Component {
  constructor(props) {
    super(props);
  }
  item = this.props.menuItem;
  render() {
    return (
      <div className={styles.item}>
        <a href={this.item.link} className={cn(styles.link, { [styles.linkUnderlineless]: this.props.isUnderlineless })}>
          {this.item.title}
        </a>
      </div>
    )
  }
}

export default Link;