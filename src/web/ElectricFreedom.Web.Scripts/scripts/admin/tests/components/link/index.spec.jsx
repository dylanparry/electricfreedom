import React from 'react';
import { RouterStore, Route } from 'mobx-router';
import { shallow } from 'enzyme';

import Link from '../../../src/components/link';

describe('<Link /> component', () => {
  const store = {
    router: new RouterStore(),
  };
  const routes = {
    basic: new Route({
      path: '/test',
      component: null,
    }),
    withParams: new Route({
      path: '/test/:param',
    }),
  };

  it('Renders a basic link with correct path and text', () => {
    const sut = shallow(
      <Link view={routes.basic} store={store}>Test Link</Link>,
    );

    expect(sut.html()).toBe('<a href="/test">Test Link</a>');
  });

  it('Renders a paramaterised link with correct path and text', () => {
    const sut = shallow(
      <Link view={routes.withParams} params={{ param: 123 }} store={store}>Test Link</Link>,
    );

    expect(sut.html()).toBe('<a href="/test/123">Test Link</a>');
  });
});
