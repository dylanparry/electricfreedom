import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import ReviewList from '../list';

const setup = () =>
{
  const wrapper = shallow(<ReviewList />);

  return {
    wrapper,
    snapshot: toJson(wrapper),
  };
};

describe('ReviewList', () =>
{
  test('render', () =>
  {
    const { snapshot } = setup();

    expect(snapshot).toMatchSnapshot();
  });
});
