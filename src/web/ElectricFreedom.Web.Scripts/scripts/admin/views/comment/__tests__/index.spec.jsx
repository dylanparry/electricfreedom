import React from 'react';
import createContext from 'react-router-test-context';
import { mount } from 'enzyme';

import CommentSwitch from '../index';
import CommentList from '../list';

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
  const wrapper = mount(<CommentSwitch />, options);

  return {
    wrapper,
  };
};

describe('CommentSwitch', () =>
{
  test('render', () =>
  {
    const { wrapper } = setup();

    expect(wrapper.exists()).toBe(true);
  });

  test('route "/comments" renders CommentList', () =>
  {
    const { wrapper } = setup('/comments');

    expect(wrapper.find(CommentList).exists()).toBe(true);
  });
});
