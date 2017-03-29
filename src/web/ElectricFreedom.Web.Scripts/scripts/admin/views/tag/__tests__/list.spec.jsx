import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import TagList from '../list';

const setup = () =>
{
  const wrapper = shallow(<TagList />);

  return {
    wrapper,
    snapshot: toJson(wrapper),
  };
};

describe('TagList', () =>
{
  test('render', () =>
  {
    const { snapshot } = setup();

    expect(snapshot).toMatchSnapshot();
  });
});
