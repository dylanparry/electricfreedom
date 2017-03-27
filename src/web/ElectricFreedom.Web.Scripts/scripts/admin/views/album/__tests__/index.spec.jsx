import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import AlbumSwitch from '../index';
import AlbumAdd from '../add';
import AlbumEdit from '../edit';
import AlbumList from '../list';

const setup = (propOverrides) =>
{
  const wrapper = shallow(<AlbumSwitch />);

  const props = Object.assign({
    initialEntries: ['/'],
  }, propOverrides);
  const mounted = mount((
    <MemoryRouter {...props}>
      <AlbumSwitch />
    </MemoryRouter>
  ));

  return {
    wrapper,
    mounted,
  };
};

describe('AlbumSwitch', () =>
{
  test('render', () =>
  {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  test('route "/artists/:artistId/albums/add" renders AlbumAdd', () =>
  {
    for (let i = 1; i <= 5; i += 1)
    {
      const { mounted } = setup({
        initialEntries: [`/artists/${i}/albums/add`],
      });

      const albumAdd = mounted.find(AlbumAdd);
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
        const { mounted } = setup({
          initialEntries: [`/artists/${i}/albums/${j}`],
        });

        const albumEdit = mounted.find(AlbumEdit);
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
      const { mounted } = setup({
        initialEntries: [`/artists/${i}/albums`],
      });

      const albumList = mounted.find(AlbumList);
      expect(albumList.exists()).toBe(true);
      expect(albumList.props().match.params.artistId).toBe(i.toString());
    }
  });
});
