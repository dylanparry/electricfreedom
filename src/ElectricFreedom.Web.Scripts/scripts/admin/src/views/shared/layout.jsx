import React from 'react';

import routes from '../../config/routes';
import Link from '../../components/link';

const propTypes = {
  children: React.PropTypes.element.isRequired,
};

const layout = ({ children }) => (
  <div>
    <ul>
      <li><Link view={routes.home}>Home</Link></li>
      <li>
        <Link view={routes.artistIndex}>Artists</Link>
        <ul>
          <li><Link view={routes.artistAdd}>New Artist</Link></li>
          <li><Link view={routes.artistEdit} params={{ artistId: 1 }}>Edit Artist</Link></li>
          <li>
            <Link view={routes.albumIndex} params={{ artistId: 1 }}>Albums</Link>
            <ul>
              <li><Link view={routes.albumAdd} params={{ artistId: 1 }}>New Album</Link></li>
              <li><Link view={routes.albumEdit} params={{ artistId: 1, albumId: 1 }}>Edit Album</Link></li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <Link view={routes.articleIndex}>Articles</Link>
        <ul>
          <li><Link view={routes.articleAdd}>New Article</Link></li>
          <li><Link view={routes.articleEdit} params={{ articleId: 1 }}>Edit Article</Link></li>
        </ul>
      </li>
      <li>
        <Link view={routes.tagIndex}>Tags</Link>
        <ul>
          <li><Link view={routes.tagAdd}>New Tag</Link></li>
          <li><Link view={routes.tagEdit} params={{ tagId: 1 }}>Edit Tag</Link></li>
        </ul>
      </li>
      <li><Link view={routes.reviewIndex}>Reviews</Link></li>
      <li><Link view={routes.commentIndex}>Comments</Link></li>
      <li><Link view={routes.userIndex}>Users</Link></li>
    </ul>

    {children}
  </div>
);

layout.propTypes = propTypes;

export default layout;
