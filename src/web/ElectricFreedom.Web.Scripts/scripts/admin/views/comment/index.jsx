import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CommentList from './list';

const commentSwitch = () => (
  <Switch>
    <Route path="/comments" component={CommentList} />
  </Switch>
);

export default commentSwitch;
