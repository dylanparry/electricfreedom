import React from 'react';
import createContext from 'react-router-test-context';
import { mount } from 'enzyme';

import UserSwitch from '../index';
import UserList from '../list';

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
  const wrapper = mount(<UserSwitch />, options);

  return {
    wrapper,
  };
};

describe('UserSwitch', () =>
{
  test('render', () =>
  {
    const { wrapper } = setup();

    expect(wrapper.exists()).toBe(true);
  });

  test('route "/users" renders UserList', () =>
  {
    const { wrapper } = setup('/users');

    expect(wrapper.find(UserList).exists()).toBe(true);
  });
});
