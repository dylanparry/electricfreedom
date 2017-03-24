import React from 'react';
import { shallow } from 'enzyme';

import HomeSwitch from '../index';

const setup = () =>
{
  const wrapper = shallow(<HomeSwitch />);

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
});
