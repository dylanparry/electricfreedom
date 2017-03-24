import React from 'react';
import { shallow } from 'enzyme';

import ArticleList from '../list';

const setup = () =>
{
  const wrapper = shallow(<ArticleList />);

  return {
    wrapper,
  };
};

describe('ArticleList', () =>
{
  test('render', () =>
  {
    const { wrapper } = setup();

    expect(wrapper.exists()).toBe(true);
  });
});
