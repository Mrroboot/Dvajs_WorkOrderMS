import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Switch } from 'dva/router';
//import App from './routes/app';
import logins from './routes/Login';
import Homes from './routes/Homes';

// const registerModel = (app, model) => {
//    if(!(app._models.filter(m => m.namespace === model.namespace).length === 1)) {
//      app.model(model)
//    }
// }

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" exact component={logins} />
        <Route path="/" exact component={Homes} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
