import React from 'react';
import createContext from 'react-router-test-context';
import { mount } from 'enzyme';

import HomeSwitch from '../index';
import Stats from '../stats';

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
  const wrapper = mount(<HomeSwitch />, options);

  return {
    wrapper,
  };
};

describe('HomeSwitch', () =>
{
  test('render', () =>
  {
    const { wrapper } = setup();

    expect(wrapper.exists()).toBe(true);
  });

  test('route "/" renders Stats', () =>
  {
    const { wrapper } = setup();

    expect(wrapper.find(Stats).exists()).toBe(true);
  });
});
