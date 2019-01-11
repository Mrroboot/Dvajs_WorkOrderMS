import React from 'react';
import { Router, Route, Switch } from 'dva/router';
<<<<<<< HEAD
import Homes from './routes/home';
=======
import IndexPage from './routes/IndexPage';
import Homes from './routes/Homes';
>>>>>>> modify the routes

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Homes} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
