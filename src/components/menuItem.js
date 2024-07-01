import React from "react";

class MenuItem extends React.Component {
    constructor(props) {
        super(props);
    }
    item = this.props.menuItem;
    render() {
        return (
            <div className='item'>
                <a href={this.item.link}>
                    {this.item.title}
                </a>
            </div>
        )
    }
}

export default MenuItem;