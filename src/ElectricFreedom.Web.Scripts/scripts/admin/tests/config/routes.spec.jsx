import { RouterStore } from 'mobx-router';

import routes from '../../src/config/routes';

describe('routes', () => {
  let router;

  beforeEach(() => {
    router = new RouterStore();
    router.currentView = routes.home;
  });

  it('Matches the "home" route', () => {
    router.goTo(routes.home);

    expect(router.currentPath).toBe('/');
  });

  it('Matches the "artistIndex" route', () => {
    router.goTo(routes.artistIndex);

    expect(router.currentPath).toBe('/artists');
  });

  it('Matches the "artistEdit" route', () => {
    const params = {
      artistId: 123,
    };

    router.goTo(routes.artistEdit, params);

    expect(router.currentPath).toBe('/artists/123');
  });

  it('Matches the "artistAdd" route', () => {
    router.goTo(routes.artistAdd);

    expect(router.currentPath).toBe('/artists/add');
  });

  it('Matches the "albumIndex" route', () => {
    const params = {
      artistId: 123,
    };

    router.goTo(routes.albumIndex, params);

    expect(router.currentPath).toBe('/artists/123/albums');
  });

  it('Matches the "albumEdit" route', () => {
    const params = {
      artistId: 123,
      albumId: 456,
    };

    router.goTo(routes.albumEdit, params);

    expect(router.currentPath).toBe('/artists/123/albums/456');
  });

  it('Matches the "albumAdd" route', () => {
    const params = {
      artistId: 123,
    };

    router.goTo(routes.albumAdd, params);

    expect(router.currentPath).toBe('/artists/123/albums/add');
  });

  it('Matches the "articleIndex" route', () => {
    router.goTo(routes.articleIndex);

    expect(router.currentPath).toBe('/articles');
  });

  it('Matches the "articleEdit" route', () => {
    const params = {
      articleId: 123,
    };

    router.goTo(routes.articleEdit, params);

    expect(router.currentPath).toBe('/articles/123');
  });

  it('Matches the "articleAdd" route', () => {
    router.goTo(routes.articleAdd);

    expect(router.currentPath).toBe('/articles/add');
  });

  it('Matches the "tagIndex" route', () => {
    router.goTo(routes.tagIndex);

    expect(router.currentPath).toBe('/tags');
  });

  it('Matches the "tagEdit" route', () => {
    const params = {
      tagId: 123,
    };

    router.goTo(routes.tagEdit, params);

    expect(router.currentPath).toBe('/tags/123');
  });

  it('Matches the "tagAdd" route', () => {
    router.goTo(routes.tagAdd);

    expect(router.currentPath).toBe('/tags/add');
  });

  it('Matches the "reviewIndex" route', () => {
    router.goTo(routes.reviewIndex);

    expect(router.currentPath).toBe('/reviews');
  });

  it('Matches the "commentIndex" route', () => {
    router.goTo(routes.commentIndex);

    expect(router.currentPath).toBe('/comments');
  });

  it('Matches the "userIndex" route', () => {
    router.goTo(routes.userIndex);

    expect(router.currentPath).toBe('/users');
  });
});
