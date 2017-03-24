import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ReviewList from './list';

const reviewSwitch = () => (
  <Switch>
    <Route path="/reviews" component={ReviewList} />
  </Switch>
);

export default reviewSwitch;
