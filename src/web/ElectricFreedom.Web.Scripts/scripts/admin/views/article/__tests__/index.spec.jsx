import React from 'react';
import { shallow } from 'enzyme';

import ArticleSwitch from '../index';

const setup = () =>
{
  const wrapper = shallow(<ArticleSwitch />);

  return {
    wrapper,
  };
};

describe('ArticleSwitch', () =>
{
  test('render', () =>
  {
    const { wrapper } = setup();

    expect(wrapper.exists()).toBe(true);
  });
});
