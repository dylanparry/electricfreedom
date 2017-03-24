import React from 'react';
import { shallow } from 'enzyme';
import createRouterContext from 'react-router-test-context';

import Layout from '../layout';

const setup = () =>
{
  const context = createRouterContext();
  const wrapper = shallow(<Layout />, { context });

  return {
    wrapper,
  };
};

describe('Layout', () =>
{
  test('render', () =>
  {
    const { wrapper } = setup();

    expect(wrapper.exists()).toBe(true);
  });
});
