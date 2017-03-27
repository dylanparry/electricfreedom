import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import CommentSwitch from '../index';
import CommentList from '../list';

const setup = (propOverrides) =>
{
  const wrapper = shallow(<CommentSwitch />);

  const props = Object.assign({
    initialEntries: ['/'],
  }, propOverrides);
  const mounted = mount((
    <MemoryRouter {...props}>
      <CommentSwitch />
    </MemoryRouter>
  ));

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
    const { mounted } = setup({
      initialEntries: ['/comments'],
    });

    expect(mounted.find(CommentList).exists()).toBe(true);
  });
});
