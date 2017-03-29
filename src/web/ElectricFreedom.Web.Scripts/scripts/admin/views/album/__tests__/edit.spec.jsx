import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import AlbumEdit from '../edit';

const setup = () =>
{
  const wrapper = shallow(<AlbumEdit />);

  return {
    wrapper,
    snapshot: toJson(wrapper),
  };
};

describe('AlbumEdit', () =>
{
  test('render', () =>
  {
    const { snapshot } = setup();

    expect(snapshot).toMatchSnapshot();
  });
});
