import React from 'react';
import { shallow } from 'enzyme';

import ArticleAdd from '../add';

const setup = () =>
{
  const wrapper = shallow(<ArticleAdd />);

  return {
    wrapper,
  };
};

describe('ArticleAdd', () =>
{
  test('render', () =>
  {
    const { wrapper } = setup();

    expect(wrapper.exists()).toBe(true);
  });
});
