import React, { Component } from 'react';
import ReactBootstrap from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addMenuItem } from '../actions';

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      menuItemName: '',
      menuAddress: '',
      menuIcon: ''
    }
  }

  render() {
    console.log('content props', this.props);
    return (
      <div className="Content">
        <div className="row">
          <div className="col-lg-4">
            <div className="input-group">
              <input
              onChange={event => this.setState({ menuItemName: event.target.value })}
              type="text" className="form-control" placeholder="Dodaj pozycję do menu" />

              <input
              onChange={event => this.setState({ menuAddress: event.target.value })}
              type="text" className="form-control" placeholder="Jaki adres?" />

              <input
              onChange={event => this.setState({ menuIcon: event.target.value })}
              type="text" className="form-control" placeholder="Wybierz ikonę" />


              <span className="input-group-btn">
                <button
                 className="btn btn-default"
                 type="button"
                 onClick={() => {
                   if(this.state.menuItemName === '') {
                     alert('Wpisz coś!')
                   } else {
                      this.props.addMenuItem({title: this.state.menuItemName})
                    }
                 }}
                 >Dodaj!</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addMenuItem }, dispatch)
}

export default connect(null, mapDispatchToProps)(Dashboard);
