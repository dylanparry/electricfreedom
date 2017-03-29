import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import Stats from '../stats';

const setup = () =>
{
  const wrapper = shallow(<Stats />);

  return {
    wrapper,
    snapshot: toJson(wrapper),
  };
};

describe('Stats', () =>
{
  test('render', () =>
  {
    const { snapshot } = setup();

    expect(snapshot).toMatchSnapshot();
  });
});
