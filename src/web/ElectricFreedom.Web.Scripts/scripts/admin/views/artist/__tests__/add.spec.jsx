import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import ArtistAdd from '../add';

const setup = () =>
{
  const wrapper = shallow(<ArtistAdd />);

  return {
    wrapper,
    snapshot: toJson(wrapper),
  };
};

describe('ArtistAdd', () =>
{
  test('render', () =>
  {
    const { snapshot } = setup();

    expect(snapshot).toMatchSnapshot();
  });
});
