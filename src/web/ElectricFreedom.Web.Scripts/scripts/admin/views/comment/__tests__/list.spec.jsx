import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import CommentList from '../list';

const setup = () =>
{
  const wrapper = shallow(<CommentList />);

  return {
    wrapper,
    snapshot: toJson(wrapper),
  };
};

describe('CommentList', () =>
{
  test('render', () =>
  {
    const { snapshot } = setup();

    expect(snapshot).toMatchSnapshot();
  });
});
