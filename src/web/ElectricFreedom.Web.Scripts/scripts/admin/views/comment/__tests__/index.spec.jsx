import React from 'react';
import createContext from 'react-router-test-context';
import { shallow, mount } from 'enzyme';

import CommentSwitch from '../index';
import CommentList from '../list';

const setup = (pathname = '/') =>
{
  const wrapper = shallow(<CommentSwitch />);

  const options = {
    context: createContext({
      location: { pathname },
    }),
    childContextTypes: {
      router: React.PropTypes.object,
    },
  };
  const mounted = mount(<CommentSwitch />, options);

  return {
    wrapper,
    mounted,
  };
};

describe('CommentSwitch', () =>
{
  test('render', () =>
  {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  test('route "/comments" renders CommentList', () =>
  {
    const { mounted } = setup('/comments');

    expect(mounted.find(CommentList).exists()).toBe(true);
  });
});
