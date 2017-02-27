import React from 'react';

import { Route } from 'mobx-router';

const routes = {
  home: new Route({
    path: '/',
    component: <p>Home Page</p>,
  }),

  artistIndex: new Route({
    path: '/artists',
    component: <p>Artists Index</p>,
  }),

  artistEdit: new Route({
    path: '/artists/:artistId',
    component: <p>Edit Artist</p>,
  }),

  artistAdd: new Route({
    path: '/artists/add',
    component: <p>New Artist</p>,
  }),

  albumIndex: new Route({
    path: '/artists/:artistId/albums',
    component: <p>Albums Index</p>,
  }),

  albumEdit: new Route({
    path: '/artists/:artistId/albums/:albumId',
    component: <p>Edit Album</p>,
  }),

  albumAdd: new Route({
    path: '/artists/:artistId/albums/add',
    component: <p>New Album</p>,
  }),

  articleIndex: new Route({
    path: '/articles',
    component: <p>Articles Index</p>,
  }),

  articleEdit: new Route({
    path: '/articles/:articleId',
    component: <p>Edit Article</p>,
  }),

  articleAdd: new Route({
    path: '/articles/add',
    component: <p>New Article</p>,
  }),

  tagIndex: new Route({
    path: '/tags',
    component: <p>Tags Index</p>,
  }),

  tagEdit: new Route({
    path: '/tags/:tagId',
    component: <p>Edit Tag</p>,
  }),

  tagAdd: new Route({
    path: '/tags/add',
    component: <p>New Tag</p>,
  }),

  reviewIndex: new Route({
    path: '/reviews',
    component: <p>Reviews Index</p>,
  }),

  commentIndex: new Route({
    path: '/comments',
    component: <p>Comments Index</p>,
  }),

  userIndex: new Route({
    path: '/users',
    component: <p>Users Index</p>,
  }),
};

export default routes;
