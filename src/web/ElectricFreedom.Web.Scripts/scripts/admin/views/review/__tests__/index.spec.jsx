import React from 'react';
import createContext from 'react-router-test-context';
import { mount } from 'enzyme';

import ReviewSwitch from '../index';
import ReviewList from '../list';

const setup = (pathname = '/') =>
{
  const options = {
    context: createContext({
      location: { pathname },
    }),
    childContextTypes: {
      router: React.PropTypes.object,
    },
  };
  const wrapper = mount(<ReviewSwitch />, options);

  return {
    wrapper,
  };
};

describe('ReviewSwitch', () =>
{
  test('render', () =>
  {
    const { wrapper } = setup();

    expect(wrapper.exists()).toBe(true);
  });

  test('route "/reviews" renders ReviewList', () =>
  {
    const { wrapper } = setup('/reviews');

    expect(wrapper.find(ReviewList).exists()).toBe(true);
  });
});
