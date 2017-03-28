import React from 'react';
import createContext from 'react-router-test-context';
import { shallow, mount } from 'enzyme';

import TagSwitch from '../index';
import TagAdd from '../add';
import TagEdit from '../edit';
import TagList from '../list';

const setup = (pathname = '/') =>
{
  const wrapper = shallow(<TagSwitch />);

  const options = {
    context: createContext({
      location: { pathname },
    }),
    childContextTypes: {
      router: React.PropTypes.object,
    },
  };
  const mounted = mount(<TagSwitch />, options);

  return {
    wrapper,
    mounted,
  };
};

describe('TagSwitch', () =>
{
  test('render', () =>
  {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  test('route "/tags/add" renders TagAdd', () =>
  {
    const { mounted } = setup('/tags/add');

    expect(mounted.find(TagAdd).exists()).toBe(true);
  });

  test('route "/tags/:tagId" renders TagEdit', () =>
  {
    for (let i = 0; i <= 5; i += 1)
    {
      const { mounted } = setup(`/tags/${i}`);

      const tagEdit = mounted.find(TagEdit);
      expect(tagEdit.exists()).toBe(true);
      expect(tagEdit.props().match.params.tagId).toBe(i.toString());
    }
  });

  test('route "/tags" renders TagList', () =>
  {
    const { mounted } = setup('/tags');

    expect(mounted.find(TagList).exists()).toBe(true);
  });
});
