import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

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
      <Route path="/users" component={() => <p>Users</p>} />
      <Route path="/comments" component={() => <p>Comments</p>} />
      <Route path="/reviews" component={() => <p>Reviews</p>} />
      <Route path="/tags/add" component={() => <p>Add Tag</p>} />
      <Route path="/tags/:articleId" component={() => <p>Edit Tag</p>} />
      <Route path="/tags" component={() => <p>Tags</p>} />
      <Route path="/articles/add" component={() => <p>Add Article</p>} />
      <Route path="/articles/:articleId" component={() => <p>Edit Article</p>} />
      <Route path="/articles" component={() => <p>Articles</p>} />
      <Route path="/artists/:artistId/albums/add" component={() => <p>Add Album</p>} />
      <Route path="/artists/:artistId/albums/:albumId" component={() => <p>Edit Album</p>} />
      <Route path="/artists/:artistId/albums" component={() => <p>Albums</p>} />
      <Route path="/artists/add" component={() => <p>Add Artist</p>} />
      <Route path="/artists/:artistId" component={() => <p>Edit Artist</p>} />
      <Route path="/artists" component={() => <p>Artists</p>} />
      <Route path="/" component={() => <p>Home</p>} />
    </Switch>
  </div>
);

export default app;
