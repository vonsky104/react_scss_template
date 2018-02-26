import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import NavSideItem from './NavSideItem';

class NavSide extends Component {
  render() {
    console.log('props',this.props);
    return (
      <div className="col-md-2 no-padding">
        <div className="NavSide">
           {
            this.props.menuItem.map((menuItem, index) => {
              return (
                <Link key={index} to={`/panel/${menuItem.address}`}>
                  <NavSideItem icon={menuItem.icon} title={menuItem.title} />
                </Link>
              )
            })
           }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    menuItem: state.menuItem
  }
}

export default connect(mapStateToProps, null)(NavSide);
