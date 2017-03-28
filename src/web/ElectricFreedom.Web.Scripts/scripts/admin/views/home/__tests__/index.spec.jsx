import React from 'react';
import createContext from 'react-router-test-context';
import { shallow, mount } from 'enzyme';

import HomeSwitch from '../index';
import Stats from '../stats';

const setup = (pathname = '/') =>
{
  const wrapper = shallow(<HomeSwitch />);

  const options = {
    context: createContext({
      location: { pathname },
    }),
    childContextTypes: {
      router: React.PropTypes.object,
    },
  };
  const mounted = mount(<HomeSwitch />, options);

  return {
    wrapper,
    mounted,
  };
};

describe('HomeSwitch', () =>
{
  test('render', () =>
  {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  test('route "/" renders Stats', () =>
  {
    const { mounted } = setup();

    expect(mounted.find(Stats).exists()).toBe(true);
  });
});
