import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import TagSwitch from '../index';
import TagAdd from '../add';
import TagEdit from '../edit';
import TagList from '../list';

const setup = (propOverrides) =>
{
  const wrapper = shallow(<TagSwitch />);

  const props = Object.assign({
    initialEntries: ['/'],
  }, propOverrides);
  const mounted = mount((
    <MemoryRouter {...props}>
      <TagSwitch />
    </MemoryRouter>
  ));

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
    const { mounted } = setup({
      initialEntries: ['/tags/add'],
    });

    expect(mounted.find(TagAdd).exists()).toBe(true);
  });

  test('route "/tags/:tagId" renders TagEdit', () =>
  {
    for (let i = 0; i <= 5; i += 1)
    {
      const { mounted } = setup({
        initialEntries: [`/tags/${i}`],
      });

      const tagEdit = mounted.find(TagEdit);
      expect(tagEdit.exists()).toBe(true);
      expect(tagEdit.props().match.params.tagId).toBe(i.toString());
    }
  });

  test('route "/tags" renders TagList', () =>
  {
    const { mounted } = setup({
      initialEntries: ['/tags'],
    });

    expect(mounted.find(TagList).exists()).toBe(true);
  });
});
