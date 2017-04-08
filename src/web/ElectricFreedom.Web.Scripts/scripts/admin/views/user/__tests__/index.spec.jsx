import React from 'react';
import PropTypes from 'prop-types';
import createContext from 'react-router-test-context';
import toJson from 'enzyme-to-json';
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
      router: PropTypes.object,
    },
  };
  const wrapper = mount(<UserSwitch />, options);

  return {
    wrapper,
    snapshot: toJson(wrapper),
  };
};

describe('UserSwitch', () =>
{
  test('render', () =>
  {
    const { snapshot } = setup();

    expect(snapshot).toMatchSnapshot();
  });

  test('route "/users" renders UserList', () =>
  {
    const { wrapper } = setup('/users');

    expect(wrapper.find(UserList).exists()).toBe(true);
  });
});
