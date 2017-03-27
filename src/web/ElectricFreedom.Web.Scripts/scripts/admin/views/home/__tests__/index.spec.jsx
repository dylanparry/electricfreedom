import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import HomeSwitch from '../index';
import Stats from '../stats';

const setup = (propOverrides) =>
{
  const wrapper = shallow(<HomeSwitch />);

  const props = Object.assign({
    initialEntries: ['/'],
  }, propOverrides);
  const mounted = mount((
    <MemoryRouter {...props}>
      <HomeSwitch />
    </MemoryRouter>
  ));

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
