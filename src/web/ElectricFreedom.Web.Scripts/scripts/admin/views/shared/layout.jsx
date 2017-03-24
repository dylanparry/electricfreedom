import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

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

    <ul>
      <li><Link to="/">Home</Link></li>
      <li>
        <Link to="/artists">Artists</Link>
        <ul>
          <li><Link to="/artists/add">Add Artist</Link></li>
          <li><Link to="/artists/1">Edit Artist</Link></li>
          <li>
            <Link to="/artists/1/albums">Albums</Link>
            <ul>
              <li><Link to="/artists/1/albums/add">Add Album</Link></li>
              <li><Link to="/artists/1/albums/1">Edit Album</Link></li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/articles">Articles</Link>
        <ul>
          <li><Link to="/articles/add">Add Article</Link></li>
          <li><Link to="/articles/1">Edit Article</Link></li>
        </ul>
      </li>
      <li>
        <Link to="/tags">Tags</Link>
        <ul>
          <li><Link to="/tags/add">Add Tag</Link></li>
          <li><Link to="/tags/1">Edit Tag</Link></li>
        </ul>
      </li>
      <li><Link to="/reviews">Reviews</Link></li>
      <li><Link to="/comments">Comments</Link></li>
      <li><Link to="/users">Users</Link></li>
    </ul>

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
