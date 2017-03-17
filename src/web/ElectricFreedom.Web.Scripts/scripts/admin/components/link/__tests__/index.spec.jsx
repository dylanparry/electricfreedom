import React from 'react';
import { RouterStore, Route } from 'mobx-router';
import { shallow } from 'enzyme';

import Link from '../';

const routes = {
  basic: new Route({
    path: '/test',
    component: null,
  }),
  withParams: new Route({
    path: '/test/:param',
    component: null,
  }),
};

const setup = (propOverrides) =>
{
  const props = Object.assign({
    children: 'Test Link',
    view: routes.basic,
    params: {},
    store: {
      router: new RouterStore(),
    },
  }, propOverrides);

  const wrapper = shallow(<Link {...props}>{props.children}</Link>);

  return {
    wrapper,
    text: wrapper.dive().dive().text(), // The link text
    href: wrapper.dive().dive().prop('href'), // The link href
  };
};

describe('Link Component', () =>
{
  test('render', () =>
  {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  test('with children', () =>
  {
    const { text } = setup({
      children: 'Other Text',
    });

    expect(text).toBe('Other Text');
  });

  test('with a "view" attribute', () =>
  {
    const { href } = setup({
      view: routes.basic,
    });

    expect(href).toBe('/test');
  });

  test('with a "params" attribute', () =>
  {
    const { href } = setup({
      view: routes.withParams,
      params: { param: 123 },
    });

    expect(href).toBe('/test/123');
  });
});
