import React from 'react';
import MenuItem from './menuItem';
import styles from './menu.module.css';
import cn from 'classnames';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
        };
        this.onBurger = this.onBurger.bind(this);
    }

    // статичный массив
    menu = [
        {
            id: 0,
            title: 'Шторы Cortin',
            link: '#0',
        },
        {
            id: 1,
            title: 'Где купить?',
            link: '#1',
        },
        {
            id: 2,
            title: 'Дилерам',
            link: '#2',
        },
        {
            id: 3,
            title: 'Дизайн студиям',
            link: '#3',
        },
        {
            id: 4,
            title: 'Контакты',
            link: '#4',
        }
    ]
    render() {
        if (this.menu.length > 0)
            return (
                <div className={cn(styles.wrapper, { [styles.wrapperActive]: this.state.isActive })}>
                    <div className={styles.burger} onClick={this.onBurger}>
                        <div className={styles.line}>
                        </div>
                    </div>
                    <div className={styles.inner}>
                        {this.menu.map((el) => (
                            <MenuItem onDelete={this.props.onDelete} onEdit={this.props.onEdit} key={el.id} menuItem={el} />
                        ))}
                    </div>
                </div>
            )
        else
            return (
                <div className={styles.wrapper}>
                    <div className={styles.burger}></div>
                    <div className={styles.inner}><h3>Нет меню</h3></div>
                </div>
            )
    }
    onBurger() {
        this.state.isActive === true ? this.setState({ isActive: false }) : this.setState({ isActive: true });
    }
}



export default Menu;