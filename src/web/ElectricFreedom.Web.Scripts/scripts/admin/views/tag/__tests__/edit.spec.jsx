import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import TagEdit from '../edit';

const setup = () =>
{
  const wrapper = shallow(<TagEdit />);

  return {
    wrapper,
    snapshot: toJson(wrapper),
  };
};

describe('TagEdit', () =>
{
  test('render', () =>
  {
    const { snapshot } = setup();

    expect(snapshot).toMatchSnapshot();
  });
});
