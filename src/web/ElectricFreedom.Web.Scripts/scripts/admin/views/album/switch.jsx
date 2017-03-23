import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AlbumList from './list';
import AlbumAdd from './add';
import AlbumEdit from './edit';

const albumSwitch = () => (
  <Switch>
    <Route path="/artists/:artistId/albums/add" component={AlbumAdd} />
    <Route path="/artists/:artistId/albums/:albumId" component={AlbumEdit} />
    <Route path="/artists/:artistId/albums" component={AlbumList} />
  </Switch>
);

export default albumSwitch;
