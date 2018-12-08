import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import store from './store';
import history from './history';

import 'bootstrap/dist/css/bootstrap.css';

import { App } from './modules';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <App />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);