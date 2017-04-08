import React from 'react';
import PropTypes from 'prop-types';
import createContext from 'react-router-test-context';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';

import ArtistSwitch from '../index';
import ArtistAdd from '../add';
import ArtistEdit from '../edit';
import ArtistList from '../list';

const setup = (pathname = '/') =>
{
  const options = {
    context: createContext({
      location: { pathname },
    }),
    childContextTypes: {
      router: PropTypes.object,
    },
  };
  const wrapper = mount(<ArtistSwitch />, options);

  return {
    wrapper,
    snapshot: toJson(wrapper),
  };
};

describe('ArtistSwitch', () =>
{
  test('render', () =>
  {
    const { snapshot } = setup();

    expect(snapshot).toMatchSnapshot();
  });

  test('route "/artists/add" renders ArtistAdd', () =>
  {
    const { wrapper } = setup('/artists/add');

    expect(wrapper.find(ArtistAdd).exists()).toBe(true);
  });

  test('route "/artists/:artistId" renders ArtistEdit', () =>
  {
    for (let i = 1; i <= 5; i += 1)
    {
      const { wrapper } = setup(`/artists/${i}`);

      const artistEdit = wrapper.find(ArtistEdit);
      expect(artistEdit.exists()).toBe(true);
      expect(artistEdit.props().match.params.artistId).toBe(i.toString());
    }
  });

  test('route "/artists" renders ArtistList', () =>
  {
    const { wrapper } = setup('/artists');

    expect(wrapper.find(ArtistList).exists()).toBe(true);
  });
});
