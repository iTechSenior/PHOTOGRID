import React from 'react';
import { shallow, mount } from 'enzyme';

import Thumbnail from '../PhotoGridView/Components/Thumbnail';

const mockData = {
  photo: {
    id: 1,
    imageUrl: 'https://scontent-ber1-1.cdninstagram.com/vp/88f4d9772eff7bc7e429e3629f507339/5C8BE025/t51.2885-15/e35/44887346_2211003352244412_5881337131845119437_n.jpg',
    description: 'Autumn colours #instagood #followme #instago #fun #my #nice #love #me #cute #follow #photooftheday #like #tbt #beautiful #picoftheday #happy #summer #instadaily #igers #fun #bestoftheday #instamood #instalike #like4like #friends truncated text after three lines of…',
    status: 'pending',
    mentioned: true,
    collections: ['cats', 'cute'],
    products: [1],
    source: {
      provider: 'instagram',
      username: 'cats',
      url: 'https://www.instagram.com/p/Bq20cFDnpCB/'
    },
    likes: 9212,
    comments: 82,
    rightsGranted: false,
    sticky: false,
    errors: ['First error', 'Second error']
  },
  selectedPhotos: []
};
const mockhandler = jest.fn();

describe('Thumbnail Component', () => {
  const wrapper = mount(
    <Thumbnail
      photo = {mockData.photo}
      selectedPhotos={mockData.selectedPhotos}
      onStatusChange = {mockhandler}
      onRightsRequest = {mockhandler}
      onStickyChange = {mockhandler}
      onSelectionChange = {mockhandler}
    />
  );

  it('allows us to set props', () => {
    expect(wrapper.props().photo).toBe(mockData.photo);
    expect(wrapper.props().selectedPhotos).toBe(mockData.selectedPhotos);
  });

  wrapper.setState({
    isOver: false
  });

  it('Show overlay binding', () => {
    wrapper.find('div.photo-grid-thumbnail-container').simulate('mouseenter');
    expect(wrapper.state().isOver).toBe(true);
    wrapper.find('div.photo-grid-thumbnail-container').simulate('mouseleave');
    expect(wrapper.state().isOver).toBe(false);
  });
});

describe('Thumbnail SnapShot', () => {
  const wrapper = shallow(
    <Thumbnail
      photo = {mockData.photo}
      selectedPhotos={mockData.selectedPhotos}
      onStatusChange = {jest.fn()}
      onRightsRequest = {jest.fn()}
      onStickyChange = {jest.fn()}
      onSelectionChange = {jest.fn()}
    />
  );

  it('match to snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});