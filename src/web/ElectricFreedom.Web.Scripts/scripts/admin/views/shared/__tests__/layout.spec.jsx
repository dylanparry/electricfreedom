import React from 'react';
import { shallow } from 'enzyme';

import Layout from '../layout';

const setup = () =>
{
  const wrapper = shallow(<Layout />);

  return {
    wrapper,
  };
};

describe('Layout', () =>
{
  test('render', () =>
  {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });
});
