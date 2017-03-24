import React from 'react';
import { shallow } from 'enzyme';

import ArtistSwitch from '../index';

const setup = () =>
{
  const wrapper = shallow(<ArtistSwitch />);

  return {
    wrapper,
  };
};

describe('ArtistSwitch', () =>
{
  test('render', () =>
  {
    const { wrapper } = setup();

    expect(wrapper.exists()).toBe(true);
  });
});
