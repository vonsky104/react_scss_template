import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addMenuItem } from '../actions';

class Pages extends Component {
  constructor() {
    super();

    this.state = {
      menuItemName: ''
    }
  }

  render() {
    console.log('content props', this.props);
    return (
      <div className="Content">
        <div className="row">
          <div className="col-lg-4">

          </div>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addMenuItem }, dispatch)
}

export default connect(null, mapDispatchToProps)(Pages);
