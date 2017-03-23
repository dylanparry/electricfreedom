import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ArtistList from './list';
import ArtistAdd from './add';
import ArtistEdit from './edit';

const artistSwitch = () => (
  <Switch>
    <Route path="/artists/add" component={ArtistAdd} />
    <Route path="/artists/:artistId" component={ArtistEdit} />
    <Route path="/artists" component={ArtistList} />
  </Switch>
);

export default artistSwitch;
