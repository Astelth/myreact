import React from "react";
import styles from './menu.module.css';

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
  }
  item = this.props.menuItem;
  render() {
    return (
      <div className={styles.item}>
        <a href={this.item.link}>
          {this.item.title}
        </a>
      </div>
    )
  }
}

export default MenuItem;