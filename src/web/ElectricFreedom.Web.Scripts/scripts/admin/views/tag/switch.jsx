import React from 'react';
import { Switch, Route } from 'react-router-dom';

import TagList from './list';
import TagAdd from './add';
import TagEdit from './edit';

const tagSwitch = () => (
  <Switch>
    <Route path="/tags/add" component={TagAdd} />
    <Route path="/tags/:tagId" component={TagEdit} />
    <Route path="/tags" component={TagList} />
  </Switch>
);

export default tagSwitch;
