import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import ReviewSwitch from '../index';
import ReviewList from '../list';

const setup = (propOverrides) =>
{
  const wrapper = shallow(<ReviewSwitch />);

  const props = Object.assign({
    initialEntries: ['/'],
  }, propOverrides);
  const mounted = mount((
    <MemoryRouter {...props}>
      <ReviewSwitch />
    </MemoryRouter>
  ));

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
    const { mounted } = setup({
      initialEntries: ['/reviews'],
    });

    expect(mounted.find(ReviewList).exists()).toBe(true);
  });
});
