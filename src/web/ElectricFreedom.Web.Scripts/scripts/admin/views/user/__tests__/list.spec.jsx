import React from 'react';
import { shallow } from 'enzyme';

import UserList from '../list';

const setup = () =>
{
  const wrapper = shallow(<UserList />);

  return {
    wrapper,
  };
};

describe('UserList', () =>
{
  test('render', () =>
  {
    const { wrapper } = setup();

    expect(wrapper.exists()).toBe(true);
  });
});
