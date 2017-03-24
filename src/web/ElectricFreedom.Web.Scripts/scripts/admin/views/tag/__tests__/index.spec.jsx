import React from 'react';
import { shallow } from 'enzyme';

import TagSwitch from '../index';

const setup = () =>
{
  const wrapper = shallow(<TagSwitch />);

  return {
    wrapper,
  };
};

describe('TagSwitch', () =>
{
  test('render', () =>
  {
    const { wrapper } = setup();

    expect(wrapper.exists()).toBe(true);
  });
});
