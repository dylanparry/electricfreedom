import React from 'react';
import { shallow } from 'enzyme';

import TagAdd from '../add';

const setup = () =>
{
  const wrapper = shallow(<TagAdd />);

  return {
    wrapper,
  };
};

describe('TagAdd', () =>
{
  test('render', () =>
  {
    const { wrapper } = setup();

    expect(wrapper.exists()).toBe(true);
  });
});
