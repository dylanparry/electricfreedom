import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Stats from './stats';

const homeSwitch = () => (
  <Switch>
    <Route path="/" component={Stats} />
  </Switch>
);

export default homeSwitch;
