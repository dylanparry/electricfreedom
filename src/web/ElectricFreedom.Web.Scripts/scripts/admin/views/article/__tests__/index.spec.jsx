import React from 'react';
import createContext from 'react-router-test-context';
import { shallow, mount } from 'enzyme';

import ArticleSwitch from '../index';
import ArticleAdd from '../add';
import ArticleEdit from '../edit';
import ArticleList from '../list';

const setup = (pathname = '/') =>
{
  const wrapper = shallow(<ArticleSwitch />);

  const options = {
    context: createContext({
      location: { pathname },
    }),
    childContextTypes: {
      router: React.PropTypes.object,
    },
  };
  const mounted = mount(<ArticleSwitch />, options);

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
    const { mounted } = setup('/articles/add');

    expect(mounted.find(ArticleAdd).exists()).toBe(true);
  });

  test('route "/articles/:articleId" renders ArticleEdit', () =>
  {
    for (let i = 1; i <= 5; i += 1)
    {
      const { mounted } = setup(`/articles/${i}`);

      const articleEdit = mounted.find(ArticleEdit);
      expect(articleEdit.exists()).toBe(true);
      expect(articleEdit.props().match.params.articleId).toBe(i.toString());
    }
  });

  test('route "/articles" renders ArticleList', () =>
  {
    const { mounted } = setup('/articles');

    expect(mounted.find(ArticleList).exists()).toBe(true);
  });
});
