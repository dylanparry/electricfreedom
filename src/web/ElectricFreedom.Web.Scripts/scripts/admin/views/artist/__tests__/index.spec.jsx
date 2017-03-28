import React from 'react';
import createContext from 'react-router-test-context';
import { shallow, mount } from 'enzyme';

import ArtistSwitch from '../index';
import ArtistAdd from '../add';
import ArtistEdit from '../edit';
import ArtistList from '../list';

const setup = (pathname = '/') =>
{
  const wrapper = shallow(<ArtistSwitch />);

  const options = {
    context: createContext({
      location: { pathname },
    }),
    childContextTypes: {
      router: React.PropTypes.object,
    },
  };
  const mounted = mount(<ArtistSwitch />, options);

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
    const { mounted } = setup('/artists/add');

    expect(mounted.find(ArtistAdd).exists()).toBe(true);
  });

  test('route "/artists/:artistId" renders ArtistEdit', () =>
  {
    for (let i = 1; i <= 5; i += 1)
    {
      const { mounted } = setup(`/artists/${i}`);

      const artistEdit = mounted.find(ArtistEdit);
      expect(artistEdit.exists()).toBe(true);
      expect(artistEdit.props().match.params.artistId).toBe(i.toString());
    }
  });

  test('route "/artists" renders ArtistList', () =>
  {
    const { mounted } = setup('/artists');

    expect(mounted.find(ArtistList).exists()).toBe(true);
  });
});
