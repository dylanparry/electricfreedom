import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import ArtistSwitch from '../index';
import ArtistAdd from '../add';
import ArtistEdit from '../edit';
import ArtistList from '../list';

const setup = (propOverrides) =>
{
  const wrapper = shallow(<ArtistSwitch />);

  const props = Object.assign({
    initialEntries: ['/'],
  }, propOverrides);
  const mounted = mount((
    <MemoryRouter {...props}>
      <ArtistSwitch />
    </MemoryRouter>
  ));

  return {
    wrapper,
    mounted,
  };
};

describe('ArtistSwitch', () =>
{
  test('render', () =>
  {
    const { wrapper } = setup();

    expect(wrapper).toMatchSnapshot();
  });

  test('route "/artists/add" renders ArtistAdd', () =>
  {
    const { mounted } = setup({
      initialEntries: ['/artists/add'],
    });

    expect(mounted.find(ArtistAdd).exists()).toBe(true);
  });

  test('route "/artists/:artistId" renders ArtistEdit', () =>
  {
    for (let i = 1; i <= 5; i += 1)
    {
      const { mounted } = setup({
        initialEntries: [`/artists/${i}`],
      });

      const artistEdit = mounted.find(ArtistEdit);
      expect(artistEdit.exists()).toBe(true);
      expect(artistEdit.props().match.params.artistId).toBe(i.toString());
    }
  });

  test('route "/artists" renders ArtistList', () =>
  {
    const { mounted } = setup({
      initialEntries: ['/artists'],
    });

    expect(mounted.find(ArtistList).exists()).toBe(true);
  });
});
