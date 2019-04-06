import React from 'react';
import { shallow, mount } from 'enzyme';

import AssignedPhoto from '../PhotoGridView/Partials/AssignedPhoto';

const mockData = {
  products: [
    {
      id: 1,
      title: 'Whisker',
      image: 'https://ae01.alicdn.com/kf/HTB1N8Q9G7yWBuNjy0Fpq6yssXXal/Led-twig-lights-holiday-lights-branches-Christmas-ornaments-HJW.jpg'
    },
    {
      id: 2,
      title: 'Merry',
      image: 'https://ae01.alicdn.com/kf/HTB1Cvrtl8jTBKNjSZFuq6z0HFXaa/Automatic-Toothpas…oothbrush-Holder-with-Cups-No-Nail-Wall-Stand-Shelf-Bathroom-Organizer.jpg'
    },
    {
      id: 3,
      title: 'Apple',
      image: 'https://img.staticbg.com/thumb/large/oaupload/banggood/images/9B/D2/54eafdb3-7f9c-4d56-9522-73c12c2fe2c3.jpg'
    },
    {
      id: 4,
      title: 'Sample',
      image: 'https://ae01.alicdn.com/kf/HTB1KwN_cGmgSKJjSsplq6yICpXai/Gamiss-Spring-Autu…ual-Tshirt-Plus-Size-Halloween-Batwing-Loose-Long-Sleeve-Solid-Color-T.jpg'
    }
  ]
};
const mockhandler = jest.fn();

describe('AssignedPhoto Component', () => {
  const wrapper = mount(
    <AssignedPhoto
      id = {mockData.products[0].id}
      title = {mockData.products[0].id.title}
      image = {mockData.products[0].id.image}
      key = {mockData.products[0].id}
      handleClickCloseBtn = {mockhandler}
    />
  );

  it('allows us to set props for ProductMan', () => {
    expect(wrapper.props().id).toBe(mockData.products[0].id);
    expect(wrapper.props().title).toBe(mockData.products[0].id.title);
    expect(wrapper.props().image).toBe(mockData.products[0].id.image);
  });

  it('click the close button', () => {
    wrapper.setState({
      photoOver: true
    });
    wrapper.find('span').simulate('click');
    expect(mockhandler).toBeCalled();
  });

});

describe('AssignedPhoto SnapShot', () => {
  const wrapper = shallow(
    <AssignedPhoto
      id = {mockData.products[0].id}
      title = {mockData.products[0].id.title}
      image = {mockData.products[0].id.image}
      key = {mockData.products[0].id}
      handleClickCloseBtn = {jest.fn()}
    />
  );

  it('match to snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});