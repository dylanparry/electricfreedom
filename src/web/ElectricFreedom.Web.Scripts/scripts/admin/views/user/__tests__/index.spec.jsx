import React from 'react';
import { shallow } from 'enzyme';

import UserSwitch from '../index';

const setup = () =>
{
  const wrapper = shallow(<UserSwitch />);

  return {
    wrapper,
  };
};

describe('UserSwitch', () =>
{
  test('render', () =>
  {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });
});
