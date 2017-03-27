import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import UserSwitch from '../index';
import UserList from '../list';

const setup = (propOverrides) =>
{
  const wrapper = shallow(<UserSwitch />);

  const props = Object.assign({
    initialEntries: ['/'],
  }, propOverrides);
  const mounted = mount((
    <MemoryRouter {...props}>
      <UserSwitch />
    </MemoryRouter>
  ));

  return {
    wrapper,
    mounted,
  };
};

describe('UserSwitch', () =>
{
  test('render', () =>
  {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  test('route "/users" renders UserList', () =>
  {
    const { mounted } = setup({
      initialEntries: ['/users'],
    });

    expect(mounted.find(UserList).exists()).toBe(true);
  });
});
