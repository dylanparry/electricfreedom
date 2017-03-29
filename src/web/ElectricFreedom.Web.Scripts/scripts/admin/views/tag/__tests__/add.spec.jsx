import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import TagAdd from '../add';

const setup = () =>
{
  const wrapper = shallow(<TagAdd />);

  return {
    wrapper,
    snapshot: toJson(wrapper),
  };
};

describe('TagAdd', () =>
{
  test('render', () =>
  {
    const { snapshot } = setup();

    expect(snapshot).toMatchSnapshot();
  });
});
