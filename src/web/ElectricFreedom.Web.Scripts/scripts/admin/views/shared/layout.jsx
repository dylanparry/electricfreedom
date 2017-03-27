import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Menu from '../../components/navigation/menu';
import HomeSwitch from '../home';
import ArtistSwitch from '../artist';
import AlbumSwitch from '../album';
import ArticleSwitch from '../article';
import TagSwitch from '../tag';
import ReviewSwitch from '../review';
import CommentSwitch from '../comment';
import UserSwitch from '../user';

const layout = () => (
  <div>
    <p>My App</p>

    <Menu />

    <Switch>
      <Route path="/users" component={UserSwitch} />
      <Route path="/comments" component={CommentSwitch} />
      <Route path="/reviews" component={ReviewSwitch} />
      <Route path="/tags" component={TagSwitch} />
      <Route path="/articles" component={ArticleSwitch} />
      <Route path="/artists/:artistId/albums" component={AlbumSwitch} />
      <Route path="/artists" component={ArtistSwitch} />
      <Route path="/" component={HomeSwitch} />
    </Switch>
  </div>
);

export default layout;
