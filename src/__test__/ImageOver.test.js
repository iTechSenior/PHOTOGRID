import React from 'react';
import { shallow, mount } from 'enzyme';

import ImageOver from '../PhotoGridView/Partials/ImageOver';

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

describe('ImageOver Component', () => {
  const wrapper = mount(
    <ImageOver
      photo = {mockData.photo}
      selectedPhotos={mockData.selectedPhotos}
      onStatusChange = {mockhandler}
      onRightsRequest = {mockhandler}
      onStickyChange = {mockhandler}
      onSelectionChange = {mockhandler}
    />
  );

  wrapper.setState({
    showDetailView: false
  });

  it('allows us to set props', () => {
    expect(wrapper.props().photo).toBe(mockData.photo);
    expect(wrapper.props().selectedPhotos).toBe(mockData.selectedPhotos);
  });

  it('Approve button click binding', () => {
    wrapper.find('div.action-block button').at(0).simulate('click');
    expect(mockhandler).toBeCalled();
  });

  it('Reject button click binding', () => {
    wrapper.find('div.action-block button').at(1).simulate('click');
    expect(mockhandler).toBeCalled();
  });

  it('Copyright button click binding', () => {
    wrapper.find('div.action-block button').at(2).simulate('click');
    expect(mockhandler).toBeCalled();
  });

  it('Sticky button click binding', () => {
    wrapper.find('div.action-block button').at(3).simulate('click');
    expect(mockhandler).toBeCalled();
  });

  it('Show Detail binding', () => {
    wrapper.find('div.show-detail div').at(0).simulate('mouseenter');
    expect(wrapper.state().showDetailView).toBe(true);
    expect(wrapper.find('div.detail-view-container')).toHaveLength(1);
    wrapper.find('div.show-detail div').at(0).simulate('mouseleave');
    expect(wrapper.state().showDetailView).toBe(false);
    expect(wrapper.find('div.detail-view-container')).toHaveLength(0);
  });

  it('Image Select checkbox binding', () => {
    wrapper.find('input.over-image__checkbox').simulate('change');
    expect(mockhandler).toBeCalled();
  });
});

describe('ImageOver SnapShot', () => {
  const wrapper = shallow(
    <ImageOver
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