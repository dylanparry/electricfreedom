import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ArticleList from './list';
import ArticleAdd from './add';
import ArticleEdit from './edit';

const articleSwitch = () => (
  <Switch>
    <Route path="/articles/add" component={ArticleAdd} />
    <Route path="/articles/:articleId" component={ArticleEdit} />
    <Route path="/articles" component={ArticleList} />
  </Switch>
);

export default articleSwitch;
