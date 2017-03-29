import React from 'react';
import createContext from 'react-router-test-context';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';

import ArticleSwitch from '../index';
import ArticleAdd from '../add';
import ArticleEdit from '../edit';
import ArticleList from '../list';

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
  const wrapper = mount(<ArticleSwitch />, options);

  return {
    wrapper,
    snapshot: toJson(wrapper),
  };
};

describe('ArticleSwitch', () =>
{
  test('render', () =>
  {
    const { snapshot } = setup();

    expect(snapshot).toMatchSnapshot();
  });

  test('route "/articles/add" renders ArticleAdd', () =>
  {
    const { wrapper } = setup('/articles/add');

    expect(wrapper.find(ArticleAdd).exists()).toBe(true);
  });

  test('route "/articles/:articleId" renders ArticleEdit', () =>
  {
    for (let i = 1; i <= 5; i += 1)
    {
      const { wrapper } = setup(`/articles/${i}`);

      const articleEdit = wrapper.find(ArticleEdit);
      expect(articleEdit.exists()).toBe(true);
      expect(articleEdit.props().match.params.articleId).toBe(i.toString());
    }
  });

  test('route "/articles" renders ArticleList', () =>
  {
    const { wrapper } = setup('/articles');

    expect(wrapper.find(ArticleList).exists()).toBe(true);
  });
});
