import React from 'react';
import { shallow } from 'enzyme';

import CommentSwitch from '../index';

const setup = () =>
{
  const wrapper = shallow(<CommentSwitch />);

  return {
    wrapper,
  };
};

describe('CommentSwitch', () =>
{
  test('render', () =>
  {
    const { wrapper } = setup();

    expect(wrapper.exists()).toBe(true);
  });
});
