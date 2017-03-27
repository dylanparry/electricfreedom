import React from 'react';
import { shallow } from 'enzyme';

import Menu from '../menu';

const setup = () =>
{
  const wrapper = shallow(<Menu />);

  return {
    wrapper,
  };
};

describe('Menu', () =>
{
  test('render', () =>
  {
    const { wrapper } = setup();

    expect(wrapper.exists()).toBe(true);
  });
});
