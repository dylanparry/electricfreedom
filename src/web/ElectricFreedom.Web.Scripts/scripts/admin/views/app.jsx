import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import HomeIndex from './home';
import ArtistSwitch from './artist/switch';
import AlbumSwitch from './album/switch';
import ArticleSwitch from './article/switch';
import TagSwitch from './tag/switch';
import ReviewIndex from './review';
import CommentIndex from './comment';
import UserIndex from './user';

const app = () => (
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
      <Route path="/users" component={UserIndex} />
      <Route path="/comments" component={CommentIndex} />
      <Route path="/reviews" component={ReviewIndex} />
      <Route path="/tags" component={TagSwitch} />
      <Route path="/articles" component={ArticleSwitch} />
      <Route path="/artists/:artistId/albums" component={AlbumSwitch} />
      <Route path="/artists" component={ArtistSwitch} />
      <Route path="/" component={HomeIndex} />
    </Switch>
  </div>
);

export default app;
