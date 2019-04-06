import React from 'react';
import { shallow, mount } from 'enzyme';

import AddProductsModal from '../PhotoGridView/Partials/AddProductsModal';
import { wrap } from 'module';

const mockData = {
  photo: {
    id: 1,
    imageUrl: 'https://scontent-ber1-1.cdninstagram.com/vp/88f4d9772eff7bc7e429e3629f507339/5C8BE025/t51.2885-15/e35/44887346_2211003352244412_5881337131845119437_n.jpg',
    products: [1],
  },
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

describe('AddProductsModal Component', () => {
  const wrapper = mount(
    <AddProductsModal
      allProducts={mockData.products}
      products={mockData.photo.products}
      handleToggleModal={mockhandler}
      onProductsChange={mockhandler}
    />
  );

  it('allows us to set props for AddProductsModal', () => {
    expect(wrapper.props().allProducts).toBe(mockData.products);
    expect(wrapper.props().products).toBe(mockData.photo.products);
  });

  it('click cancel button', () => {
    expect(wrapper.find('button.custom-dropdown__footer-button_default')).toHaveLength(1);
  });

  it('click each product', () => {
    wrapper.setState({
      products: mockData.products
    });
    expect(wrapper.find('button').at(0)).toHaveLength(1);
    wrapper.find('button').at(0).simulate('click');
    expect(wrapper.state().selectedProduct).toBe(1);
  });

  it('search product', () => {
    wrapper.find('input').simulate('change', {target: { value: '1'}});
    expect(wrapper.state().search).toBe('1');
  });

});

describe('AddProductsModal SnapShot', () => {
  const wrapper = shallow(
    <AddProductsModal
      allProducts={mockData.products}
      products={mockData.photo.products}
      handleToggleModal={mockhandler}
      onProductsChange={mockhandler}
    />
  );

  it('match to snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});