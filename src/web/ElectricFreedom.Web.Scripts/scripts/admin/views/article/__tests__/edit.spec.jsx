import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import ArticleEdit from '../edit';

const setup = () =>
{
  const wrapper = shallow(<ArticleEdit />);

  return {
    wrapper,
    snapshot: toJson(wrapper),
  };
};

describe('ArticleEdit', () =>
{
  test('render', () =>
  {
    const { snapshot } = setup();

    expect(snapshot).toMatchSnapshot();
  });
});
