import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import ArtistEdit from '../edit';

const setup = () =>
{
  const wrapper = shallow(<ArtistEdit />);

  return {
    wrapper,
    snapshot: toJson(wrapper),
  };
};

describe('ArtistEdit', () =>
{
  test('render', () =>
  {
    const { snapshot } = setup();

    expect(snapshot).toMatchSnapshot();
  });
});
