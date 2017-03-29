import React from 'react';
import createContext from 'react-router-test-context';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';

import HomeSwitch from '../index';
import Stats from '../stats';

const setup = (pathname = '/') =>
{
  const options = {
    context: createContext({
      location: { pathname, key: null },
    }),
    childContextTypes: {
      router: React.PropTypes.object,
    },
  };
  const wrapper = mount(<HomeSwitch />, options);

  return {
    wrapper,
    snapshot: toJson(wrapper),
  };
};

describe('HomeSwitch', () =>
{
  test('render', () =>
  {
    const { snapshot } = setup();

    expect(snapshot).toMatchSnapshot();
  });

  test('route "/" renders Stats', () =>
  {
    const { wrapper } = setup();

    expect(wrapper.find(Stats).exists()).toBe(true);
  });
});
