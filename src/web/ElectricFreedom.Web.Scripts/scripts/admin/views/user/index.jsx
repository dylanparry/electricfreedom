import React from 'react';
import { Switch, Route } from 'react-router-dom';

import UserList from './list';

const userSwitch = () => (
  <Switch>
    <Route path="/users" component={UserList} />
  </Switch>
);

export default userSwitch;
