import React from 'react';
import createContext from 'react-router-test-context';
import { shallow, mount } from 'enzyme';

import UserSwitch from '../index';
import UserList from '../list';

const setup = (pathname = '/') =>
{
  const wrapper = shallow(<UserSwitch />);

  const options = {
    context: createContext({
      location: { pathname },
    }),
    childContextTypes: {
      router: React.PropTypes.object,
    },
  };
  const mounted = mount(<UserSwitch />, options);

  return {
    wrapper,
    mounted,
  };
};

describe('UserSwitch', () =>
{
  test('render', () =>
  {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  test('route "/users" renders UserList', () =>
  {
    const { mounted } = setup('/users');

    expect(mounted.find(UserList).exists()).toBe(true);
  });
});
