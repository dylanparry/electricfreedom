import React from 'react';
import { shallow } from 'enzyme';

import AlbumEdit from '../edit';

const setup = () =>
{
  const wrapper = shallow(<AlbumEdit />);

  return {
    wrapper,
  };
};

describe('AlbumEdit', () =>
{
  test('render', () =>
  {
    const { wrapper } = setup();

    expect(wrapper.exists()).toBe(true);
  });
});
