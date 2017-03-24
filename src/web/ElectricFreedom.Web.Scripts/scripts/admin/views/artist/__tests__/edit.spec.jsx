import React from 'react';
import { shallow } from 'enzyme';

import ArtistEdit from '../edit';

const setup = () =>
{
  const wrapper = shallow(<ArtistEdit />);

  return {
    wrapper,
  };
};

describe('ArtistEdit', () =>
{
  test('render', () =>
  {
    const { wrapper } = setup();

    expect(wrapper.exists()).toBe(true);
  });
});
