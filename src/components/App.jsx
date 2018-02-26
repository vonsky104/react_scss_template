import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavTop from './NavTop';
import NavSide from './NavSide';
import Dashboard from '../sections/Dashboard';
import Pages from '../sections/Pages';
import Footer from './Footer';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavTop />
          <div className="row no-margin">
              <NavSide />
            <div className="col-md-9">
               <Switch>
                 <Route path='/dashboard' component={Dashboard} />
                 <Route path='/pages' component={Pages} />
               </Switch>
               <Footer />
            </div>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
