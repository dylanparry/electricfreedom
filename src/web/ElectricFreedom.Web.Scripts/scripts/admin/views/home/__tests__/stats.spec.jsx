import React from 'react';
import { shallow } from 'enzyme';

import Stats from '../stats';

const setup = () =>
{
  const wrapper = shallow(<Stats />);

  return {
    wrapper,
  };
};

describe('Stats', () =>
{
  test('render', () =>
  {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });
});
