import React from 'react';
import { shallow } from 'enzyme';

import ArtistAdd from '../add';

const setup = () =>
{
  const wrapper = shallow(<ArtistAdd />);

  return {
    wrapper,
  };
};

describe('ArtistAdd', () =>
{
  test('render', () =>
  {
    const { wrapper } = setup();

    expect(wrapper.exists()).toBe(true);
  });
});
