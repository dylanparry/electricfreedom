import React from 'react';
import { object } from 'prop-types';
import createContext from 'react-router-test-context';
import toJson from 'enzyme-to-json';
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
      router: object,
    },
  };
  const wrapper = mount(<CommentSwitch />, options);

  return {
    wrapper,
    snapshot: toJson(wrapper),
  };
};

describe('CommentSwitch', () =>
{
  test('render', () =>
  {
    const { snapshot } = setup();

    expect(snapshot).toMatchSnapshot();
  });

  test('route "/comments" renders CommentList', () =>
  {
    const { wrapper } = setup('/comments');

    expect(wrapper.find(CommentList).exists()).toBe(true);
  });
});
