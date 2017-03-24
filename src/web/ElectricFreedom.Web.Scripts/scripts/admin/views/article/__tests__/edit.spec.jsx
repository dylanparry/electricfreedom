import React from 'react';
import { shallow } from 'enzyme';

import ArticleEdit from '../edit';

const setup = () =>
{
  const wrapper = shallow(<ArticleEdit />);

  return {
    wrapper,
  };
};

describe('ArticleEdit', () =>
{
  test('render', () =>
  {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });
});
