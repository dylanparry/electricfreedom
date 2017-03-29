import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import ArtistList from '../list';

const setup = () =>
{
  const wrapper = shallow(<ArtistList />);

  return {
    wrapper,
    snapshot: toJson(wrapper),
  };
};

describe('ArtistList', () =>
{
  test('render', () =>
  {
    const { snapshot } = setup();

    expect(snapshot).toMatchSnapshot();
  });
});
