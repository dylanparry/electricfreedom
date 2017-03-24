import React from 'react';
import { shallow } from 'enzyme';

import ReviewList from '../list';

const setup = () =>
{
  const wrapper = shallow(<ReviewList />);

  return {
    wrapper,
  };
};

describe('ReviewList', () =>
{
  test('render', () =>
  {
    const { wrapper } = setup();

    expect(wrapper.exists()).toBe(true);
  });
});
