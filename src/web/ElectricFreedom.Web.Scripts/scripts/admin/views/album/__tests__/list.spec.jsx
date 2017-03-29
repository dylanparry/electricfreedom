import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import AlbumList from '../list';

const setup = () =>
{
  const wrapper = shallow(<AlbumList />);

  return {
    wrapper,
    snapshot: toJson(wrapper),
  };
};

describe('AlbumList', () =>
{
  test('render', () =>
  {
    const { snapshot } = setup();

    expect(snapshot).toMatchSnapshot();
  });
});
