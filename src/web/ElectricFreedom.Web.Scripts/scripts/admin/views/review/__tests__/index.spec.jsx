import React from 'react';
import createContext from 'react-router-test-context';
import { shallow, mount } from 'enzyme';

import ReviewSwitch from '../index';
import ReviewList from '../list';

const setup = (pathname = '/') =>
{
  const wrapper = shallow(<ReviewSwitch />);

  const options = {
    context: createContext({
      location: { pathname },
    }),
    childContextTypes: {
      router: React.PropTypes.object,
    },
  };
  const mounted = mount(<ReviewSwitch />, options);

  return {
    wrapper,
    mounted,
  };
};

describe('ReviewSwitch', () =>
{
  test('render', () =>
  {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  test('route "/reviews" renders ReviewList', () =>
  {
    const { mounted } = setup('/reviews');

    expect(mounted.find(ReviewList).exists()).toBe(true);
  });
});
