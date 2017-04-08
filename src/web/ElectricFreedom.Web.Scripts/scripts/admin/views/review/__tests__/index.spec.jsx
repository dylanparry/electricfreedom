import React from 'react';
import PropTypes from 'prop-types';
import createContext from 'react-router-test-context';
import toJson from 'enzyme-to-json';
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
      router: PropTypes.object,
    },
  };
  const wrapper = mount(<ReviewSwitch />, options);

  return {
    wrapper,
    snapshot: toJson(wrapper),
  };
};

describe('ReviewSwitch', () =>
{
  test('render', () =>
  {
    const { snapshot } = setup();

    expect(snapshot).toMatchSnapshot();
  });

  test('route "/reviews" renders ReviewList', () =>
  {
    const { wrapper } = setup('/reviews');

    expect(wrapper.find(ReviewList).exists()).toBe(true);
  });
});
