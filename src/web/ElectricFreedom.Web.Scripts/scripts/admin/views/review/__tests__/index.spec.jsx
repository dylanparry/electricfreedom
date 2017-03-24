import React from 'react';
import { shallow } from 'enzyme';

import ReviewSwitch from '../index';

const setup = () =>
{
  const wrapper = shallow(<ReviewSwitch />);

  return {
    wrapper,
  };
};

describe('ReviewSwitch', () =>
{
  test('render', () =>
  {
    const { wrapper } = setup();

    expect(wrapper.exists()).toBe(true);
  });
});
