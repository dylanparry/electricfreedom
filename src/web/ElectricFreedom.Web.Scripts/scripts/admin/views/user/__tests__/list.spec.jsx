import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import UserList from '../list';

const setup = () =>
{
  const wrapper = shallow(<UserList />);

  return {
    wrapper,
    snapshot: toJson(wrapper),
  };
};

describe('UserList', () =>
{
  test('render', () =>
  {
    const { snapshot } = setup();

    expect(snapshot).toMatchSnapshot();
  });
});
