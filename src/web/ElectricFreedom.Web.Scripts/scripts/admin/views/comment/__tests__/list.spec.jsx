import React from 'react';
import { shallow } from 'enzyme';

import CommentList from '../list';

const setup = () =>
{
  const wrapper = shallow(<CommentList />);

  return {
    wrapper,
  };
};

describe('CommentList', () =>
{
  test('render', () =>
  {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });
});
