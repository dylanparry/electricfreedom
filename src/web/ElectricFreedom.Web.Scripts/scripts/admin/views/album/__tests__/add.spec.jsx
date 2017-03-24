import React from 'react';
import { shallow } from 'enzyme';

import AlbumAdd from '../add';

const setup = () =>
{
  const wrapper = shallow(<AlbumAdd />);

  return {
    wrapper,
  };
};

describe('AlbumAdd', () =>
{
  test('render', () =>
  {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });
});
