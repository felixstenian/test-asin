import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './page/Dashboard';

const Routes = () => (
  <Switch>
    <Route path="/" component={Dashboard} />
  </Switch>
);

export default Routes;
