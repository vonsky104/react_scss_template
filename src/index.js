import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './dist/css/main_1.1.css';

import rootReducer from './reducers';
import { addMenuItem } from './actions';

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path='/' component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);
