import React from 'react';
import createContext from 'react-router-test-context';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';

import AlbumSwitch from '../index';
import AlbumAdd from '../add';
import AlbumEdit from '../edit';
import AlbumList from '../list';

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
  const wrapper = mount(<AlbumSwitch />, options);

  return {
    wrapper,
    snapshot: toJson(wrapper),
  };
};

describe('AlbumSwitch', () =>
{
  test('render', () =>
  {
    const { snapshot } = setup();

    expect(snapshot).toMatchSnapshot();
  });

  test('route "/artists/:artistId/albums/add" renders AlbumAdd', () =>
  {
    for (let i = 1; i <= 5; i += 1)
    {
      const { wrapper } = setup(`/artists/${i}/albums/add`);

      const albumAdd = wrapper.find(AlbumAdd);
      expect(albumAdd.exists()).toBe(true);
      expect(albumAdd.props().match.params.artistId).toBe(i.toString());
    }
  });

  test('route "/artists/:artistId/albums/:albumId" renders AlbumEdit', () =>
  {
    for (let i = 1; i <= 5; i += 1)
    {
      for (let j = 1; j <= 5; j += 1)
      {
        const { wrapper } = setup(`/artists/${i}/albums/${j}`);

        const albumEdit = wrapper.find(AlbumEdit);
        expect(albumEdit.exists()).toBe(true);
        expect(albumEdit.props().match.params.artistId).toBe(i.toString());
        expect(albumEdit.props().match.params.albumId).toBe(j.toString());
      }
    }
  });

  test('route "/artists/:artistId/albums" renders AlbumList', () =>
  {
    for (let i = 1; i <= 5; i += 1)
    {
      const { wrapper } = setup(`/artists/${i}/albums`);

      const albumList = wrapper.find(AlbumList);
      expect(albumList.exists()).toBe(true);
      expect(albumList.props().match.params.artistId).toBe(i.toString());
    }
  });
});
