import React, { Component } from 'react';

class NavTop extends Component {
  render() {
    return (
      <header className="NavTop">
        <div className="NavTop__content">
          <div className="NavTop__logo col-md-2">
            AdminIact
          </div>
          <nav className="topMenu">
            <div className="topMenu--parent">
              <a className="topMenu--parent__item">
                  Actions
              </a>
            </div>
            <div className="topMenu--parent">
              <a className="topMenu--parent__item">
                  Actions
              </a>
            </div>
            <div className="topMenu--parent">
              <a className="topMenu--parent__item">
                  Actions
              </a>
            </div>
            <div className="topMenu--parent">
              <a className="topMenu--parent__item">
                  Actions
              </a>
            </div>
          </nav>
        </div>
      </header>
    )
  }
}

export default NavTop;
