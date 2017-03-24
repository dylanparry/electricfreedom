import React from 'react';
import { shallow } from 'enzyme';

import ArtistList from '../list';

const setup = () =>
{
  const wrapper = shallow(<ArtistList />);

  return {
    wrapper,
  };
};

describe('ArtistList', () =>
{
  test('render', () =>
  {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });
});
