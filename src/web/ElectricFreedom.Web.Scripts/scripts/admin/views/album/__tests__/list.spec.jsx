import React from 'react';
import { shallow } from 'enzyme';

import AlbumList from '../list';

const setup = () =>
{
  const wrapper = shallow(<AlbumList />);

  return {
    wrapper,
  };
};

describe('AlbumList', () =>
{
  test('render', () =>
  {
    const { wrapper } = setup();

    expect(wrapper.exists()).toBe(true);
  });
});
