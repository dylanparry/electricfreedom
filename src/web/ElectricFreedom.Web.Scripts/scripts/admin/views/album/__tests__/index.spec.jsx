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
  const mounted = mount(<MemoryRouter {...props}><AlbumSwitch /></MemoryRouter>);

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
    for (let i = 1; i <= 10; i += 1)
    {
      const { mounted } = setup({
        initialEntries: [`/artists/${i}/albums/add`],
      });

      expect(mounted.find(AlbumAdd).exists()).toBe(true);
    }
  });

  test('route "/artists/:artistId/albums/:albumId" renders AlbumEdit', () =>
  {
    for (let i = 1; i <= 10; i += 1)
    {
      for (let j = 1; j <= 10; j += 1)
      {
        const { mounted } = setup({
          initialEntries: [`/artists/${i}/albums/${j}`],
        });

        expect(mounted.find(AlbumEdit).exists()).toBe(true);
      }
    }
  });

  test('route "/artists/:artistId/albums" renders AlbumList', () =>
  {
    for (let i = 1; i <= 10; i += 1)
    {
      const { mounted } = setup({
        initialEntries: [`/artists/${i}/albums`],
      });

      expect(mounted.find(AlbumList).exists()).toBe(true);
    }
  });
});
