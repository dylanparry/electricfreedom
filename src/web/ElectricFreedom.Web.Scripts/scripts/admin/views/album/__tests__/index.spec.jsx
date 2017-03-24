import React from 'react';
import { shallow } from 'enzyme';

import AlbumSwitch from '../index';

const setup = () =>
{
  const wrapper = shallow(<AlbumSwitch />);

  return {
    wrapper,
  };
};

describe('AlbumSwitch', () =>
{
  test('render', () =>
  {
    const { wrapper } = setup();

    expect(wrapper.exists()).toBe(true);
  });
});
