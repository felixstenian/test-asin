import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './page/Dashboard';
import Profile from './page/Profile';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/profile/:id" component={Profile} />
  </Switch>
);

export default Routes;
