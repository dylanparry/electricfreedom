import React from 'react';
import createContext from 'react-router-test-context';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';

import TagSwitch from '../index';
import TagAdd from '../add';
import TagEdit from '../edit';
import TagList from '../list';

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
  const wrapper = mount(<TagSwitch />, options);

  return {
    wrapper,
    snapshot: toJson(wrapper),
  };
};

describe('TagSwitch', () =>
{
  test('render', () =>
  {
    const { snapshot } = setup();

    expect(snapshot).toMatchSnapshot();
  });

  test('route "/tags/add" renders TagAdd', () =>
  {
    const { wrapper } = setup('/tags/add');

    expect(wrapper.find(TagAdd).exists()).toBe(true);
  });

  test('route "/tags/:tagId" renders TagEdit', () =>
  {
    for (let i = 0; i <= 5; i += 1)
    {
      const { wrapper } = setup(`/tags/${i}`);

      const tagEdit = wrapper.find(TagEdit);
      expect(tagEdit.exists()).toBe(true);
      expect(tagEdit.props().match.params.tagId).toBe(i.toString());
    }
  });

  test('route "/tags" renders TagList', () =>
  {
    const { wrapper } = setup('/tags');

    expect(wrapper.find(TagList).exists()).toBe(true);
  });
});
