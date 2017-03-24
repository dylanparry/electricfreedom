import React from 'react';
import { shallow } from 'enzyme';

import TagEdit from '../edit';

const setup = () =>
{
  const wrapper = shallow(<TagEdit />);

  return {
    wrapper,
  };
};

describe('TagEdit', () =>
{
  test('render', () =>
  {
    const { wrapper } = setup();

    expect(wrapper.exists()).toBe(true);
  });
});
