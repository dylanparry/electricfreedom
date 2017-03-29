import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import AlbumAdd from '../add';

const setup = () =>
{
  const wrapper = shallow(<AlbumAdd />);

  return {
    wrapper,
    snapshot: toJson(wrapper),
  };
};

describe('AlbumAdd', () =>
{
  test('render', () =>
  {
    const { snapshot } = setup();

    expect(snapshot).toMatchSnapshot();
  });
});
