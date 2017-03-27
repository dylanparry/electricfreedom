import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import ArticleSwitch from '../index';
import ArticleAdd from '../add';
import ArticleEdit from '../edit';
import ArticleList from '../list';

const setup = (propOverrides) =>
{
  const wrapper = shallow(<ArticleSwitch />);

  const props = Object.assign({
    initialEntries: ['/'],
  }, propOverrides);
  const mounted = mount((
    <MemoryRouter {...props}>
      <ArticleSwitch />
    </MemoryRouter>
  ));

  return {
    wrapper,
    mounted,
  };
};

describe('ArticleSwitch', () =>
{
  test('render', () =>
  {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  test('route "/articles/add" renders ArticleAdd', () =>
  {
    const { mounted } = setup({
      initialEntries: ['/articles/add'],
    });

    expect(mounted.find(ArticleAdd).exists()).toBe(true);
  });

  test('route "/articles/:articleId" renders ArticleEdit', () =>
  {
    for (let i = 1; i <= 5; i += 1)
    {
      const { mounted } = setup({
        initialEntries: [`/articles/${i}`],
      });

      const articleEdit = mounted.find(ArticleEdit);
      expect(articleEdit.exists()).toBe(true);
      expect(articleEdit.props().match.params.articleId).toBe(i.toString());
    }
  });

  test('route "/articles" renders ArticleList', () =>
  {
    const { mounted } = setup({
      initialEntries: ['/articles'],
    });

    expect(mounted.find(ArticleList).exists()).toBe(true);
  });
});
