import { RouterStore } from 'mobx-router';

import routes from '../routes';

const router = new RouterStore();

describe('routes', () =>
{
  test('the "home" route', () =>
  {
    router.goTo(routes.home);

    expect(router.currentPath).toBe('/');
  });

  test('the "artistIndex" route', () =>
  {
    router.goTo(routes.artistIndex);

    expect(router.currentPath).toBe('/artists');
  });

  test('the "artistEdit" route', () =>
  {
    const params = {
      artistId: 123,
    };

    router.goTo(routes.artistEdit, params);

    expect(router.currentPath).toBe('/artists/123');
  });

  test('the "artistAdd" route', () =>
  {
    router.goTo(routes.artistAdd);

    expect(router.currentPath).toBe('/artists/add');
  });

  test('the "albumIndex" route', () =>
  {
    const params = {
      artistId: 123,
    };

    router.goTo(routes.albumIndex, params);

    expect(router.currentPath).toBe('/artists/123/albums');
  });

  test('the "albumEdit" route', () =>
  {
    const params = {
      artistId: 123,
      albumId: 456,
    };

    router.goTo(routes.albumEdit, params);

    expect(router.currentPath).toBe('/artists/123/albums/456');
  });

  test('the "albumAdd" route', () =>
  {
    const params = {
      artistId: 123,
    };

    router.goTo(routes.albumAdd, params);

    expect(router.currentPath).toBe('/artists/123/albums/add');
  });

  test('the "articleIndex" route', () =>
  {
    router.goTo(routes.articleIndex);

    expect(router.currentPath).toBe('/articles');
  });

  test('the "articleEdit" route', () =>
  {
    const params = {
      articleId: 123,
    };

    router.goTo(routes.articleEdit, params);

    expect(router.currentPath).toBe('/articles/123');
  });

  test('the "articleAdd" route', () =>
  {
    router.goTo(routes.articleAdd);

    expect(router.currentPath).toBe('/articles/add');
  });

  test('the "tagIndex" route', () =>
  {
    router.goTo(routes.tagIndex);

    expect(router.currentPath).toBe('/tags');
  });

  test('the "tagEdit" route', () =>
  {
    const params = {
      tagId: 123,
    };

    router.goTo(routes.tagEdit, params);

    expect(router.currentPath).toBe('/tags/123');
  });

  test('the "tagAdd" route', () =>
  {
    router.goTo(routes.tagAdd);

    expect(router.currentPath).toBe('/tags/add');
  });

  test('the "reviewIndex" route', () =>
  {
    router.goTo(routes.reviewIndex);

    expect(router.currentPath).toBe('/reviews');
  });

  test('the "commentIndex" route', () =>
  {
    router.goTo(routes.commentIndex);

    expect(router.currentPath).toBe('/comments');
  });

  test('the "userIndex" route', () =>
  {
    router.goTo(routes.userIndex);

    expect(router.currentPath).toBe('/users');
  });
});
