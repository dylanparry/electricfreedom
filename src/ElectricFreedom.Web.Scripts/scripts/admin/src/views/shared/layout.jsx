import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'mobx-router';

import routes from '../../config/routes';

const propTypes = {
  children: React.PropTypes.element.isRequired,
  store: React.PropTypes.object.isRequired,
};

const layout = ({ children, store }) => (
  <div>
    <ul>
      <li><Link view={routes.home} store={store}>Home</Link></li>
      <li>
        <Link view={routes.artistIndex} store={store}>Artists</Link>
        <ul>
          <li><Link view={routes.artistAdd} store={store}>New Artist</Link></li>
          <li><Link view={routes.artistEdit} params={{ artistId: 1 }} store={store}>Edit Artist</Link></li>
          <li>
            <Link view={routes.albumIndex} params={{ artistId: 1 }} store={store}>Albums</Link>
            <ul>
              <li><Link view={routes.albumAdd} params={{ artistId: 1 }} store={store}>New Album</Link></li>
              <li><Link view={routes.albumEdit} params={{ artistId: 1, albumId: 1 }} store={store}>Edit Album</Link></li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <Link view={routes.articleIndex} store={store}>Articles</Link>
        <ul>
          <li><Link view={routes.articleAdd} store={store}>New Article</Link></li>
          <li><Link view={routes.articleEdit} params={{ articleId: 1 }} store={store}>Edit Article</Link></li>
        </ul>
      </li>
      <li>
        <Link view={routes.tagIndex} store={store}>Tags</Link>
        <ul>
          <li><Link view={routes.tagAdd} store={store}>New Tag</Link></li>
          <li><Link view={routes.tagEdit} params={{ tagId: 1 }} store={store}>Edit Tag</Link></li>
        </ul>
      </li>
      <li><Link view={routes.reviewIndex} store={store}>Reviews</Link></li>
      <li><Link view={routes.commentIndex} store={store}>Comments</Link></li>
      <li><Link view={routes.userIndex} store={store}>Users</Link></li>
    </ul>

    {children}
  </div>
);

layout.propTypes = propTypes;

export default inject('store')(observer(layout));
