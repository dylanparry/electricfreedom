import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import ArticleList from '../list';

const setup = () =>
{
  const wrapper = shallow(<ArticleList />);

  return {
    wrapper,
    snapshot: toJson(wrapper),
  };
};

describe('ArticleList', () =>
{
  test('render', () =>
  {
    const { snapshot } = setup();

    expect(snapshot).toMatchSnapshot();
  });
});
