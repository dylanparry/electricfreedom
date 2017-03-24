import React from 'react';
import { shallow } from 'enzyme';

import TagList from '../list';

const setup = () =>
{
  const wrapper = shallow(<TagList />);

  return {
    wrapper,
  };
};

describe('TagList', () =>
{
  test('render', () =>
  {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });
});
