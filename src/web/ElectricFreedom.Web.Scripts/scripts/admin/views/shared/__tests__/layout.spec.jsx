import React from 'react';
import createContext from 'react-router-test-context';
import { mount } from 'enzyme';

import Layout from '../layout';
import HomeSwitch from '../../home';
import ArtistSwitch from '../../artist';
import AlbumSwitch from '../../album';
import ArticleSwitch from '../../article';
import TagSwitch from '../../tag';
import ReviewSwitch from '../../review';
import CommentSwitch from '../../comment';
import UserSwitch from '../../user';

const setup = (pathname = '/') =>
{
  const options = {
    context: createContext({
      location: { pathname },
    }),
    childContextTypes: {
      router: React.PropTypes.object,
    },
  };
  const wrapper = mount(<Layout />, options);

  return {
    wrapper,
  };
};

describe('Layout', () =>
{
  test('render', () =>
  {
    const { wrapper } = setup();

    expect(wrapper.exists()).toBe(true);
  });

  test('routes beginning "/users" render UserSwitch', () =>
  {
    const routes = [
      '/users',
    ];

    for (let i = 0; i < routes.length; i += 1)
    {
      const { wrapper } = setup(routes[i]);

      expect(wrapper.find(UserSwitch).exists()).toBe(true);
    }
  });

  test('routes beginning "/comments" render CommentSwitch', () =>
  {
    const routes = [
      '/comments',
    ];

    for (let i = 0; i < routes.length; i += 1)
    {
      const { wrapper } = setup(routes[i]);

      expect(wrapper.find(CommentSwitch).exists()).toBe(true);
    }
  });

  test('routes beginning "/reviews" render ReviewSwitch', () =>
  {
    const routes = [
      '/reviews',
    ];

    for (let i = 0; i < routes.length; i += 1)
    {
      const { wrapper } = setup(routes[i]);

      expect(wrapper.find(ReviewSwitch).exists()).toBe(true);
    }
  });

  test('routes beginning "/tags" render TagSwitch', () =>
  {
    const routes = [
      '/tags',
      '/tags/add',
      '/tags/1',
    ];

    for (let i = 0; i < routes.length; i += 1)
    {
      const { wrapper } = setup(routes[i]);

      expect(wrapper.find(TagSwitch).exists()).toBe(true);
    }
  });

  test('routes beginning "/articles" render ArticleSwitch', () =>
  {
    const routes = [
      '/articles',
      '/articles/add',
      '/articles/1',
    ];

    for (let i = 0; i < routes.length; i += 1)
    {
      const { wrapper } = setup(routes[i]);

      expect(wrapper.find(ArticleSwitch).exists()).toBe(true);
    }
  });

  test('routes beginning "/artists/:artistId/albums" render AlbumSwitch', () =>
  {
    const routes = [
      '/artists/1/albums',
      '/artists/1/albums/add',
      '/artists/1/albums/1',
    ];

    for (let i = 0; i < routes.length; i += 1)
    {
      const { wrapper } = setup(routes[i]);

      expect(wrapper.find(AlbumSwitch).exists()).toBe(true);
    }
  });

  test('routes beginning "/artists" render ArtistSwitch', () =>
  {
    const routes = [
      '/artists',
      '/artists/add',
      '/artists/1',
    ];

    for (let i = 0; i < routes.length; i += 1)
    {
      const { wrapper } = setup(routes[i]);

      expect(wrapper.find(ArtistSwitch).exists()).toBe(true);
    }
  });

  test('routes beginning "/" render HomeSwitch', () =>
  {
    const routes = [
      '/',
    ];

    for (let i = 0; i < routes.length; i += 1)
    {
      const { wrapper } = setup(routes[i]);

      expect(wrapper.find(HomeSwitch).exists()).toBe(true);
    }
  });
});
