import React, { Component } from 'react';

class NavSideItem extends Component {
  render() {
    let { icon, title } = this.props;
    return (
      <div className="NavSideItem">
        <i className={'fas fa-' + icon}></i> <span className="title">{title}</span>
      </div>
    )
  }
}

export default NavSideItem;
