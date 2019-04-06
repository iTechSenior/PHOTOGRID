import React, { Component } from 'react';
import { remove } from 'lodash';

import PhotoGridView from './PhotoGridView';

class ExampleComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
        collectDate: new Date(),
        rightsGranted: false,
        sticky: false,
        errors: ['First error', 'Second error']
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
      ],
      collections: ['cats', 'dogs', 'cute', 'super cute'],
      selectedPhotos: []
    };

    this.handleSelectionChange = this.handleSelectionChange.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleProductsChange = this.handleProductsChange.bind(this);
    this.handleCollectionsChange = this.handleCollectionsChange.bind(this);
    this.handleRightsRequest = this.handleRightsRequest.bind(this);
    this.handleStickyChange = this.handleStickyChange.bind(this);
  }

  handleSelectionChange(photoId) {
    // selected photos were changed
    const temp = this.state.selectedPhotos;
    if (!this.state.selectedPhotos.includes(photoId)) {
      temp.push(photoId);
      this.setState({
        selectedPhotos: temp
      });
    } else {
      remove(temp, (element) => element === photoId);
      this.setState({
        selectedPhotos: temp
      });
    }
  }

  handleStatusChange(status) {
    // photo status was changed
    this.setState({
      photo: 
      {
        ...this.state.photo,
        status
      }
    });
  }

  handleProductsChange(products) {
    // assigned products were changed
    const photo = {...this.state.photo};
    photo.products = products;
    this.setState({ photo });
  }

  handleCollectionsChange(collections) {
    // assigned collections were changed
  }

  handleRightsRequest() {
    // media rights were requested
    this.setState({
      photo: 
      {
        ...this.state.photo,
        rightsGranted: true
      }
    });
  }

  handleStickyChange(sticky) {
    // sticky flag was changed
    this.setState({
      photo: 
      {
        ...this.state.photo,
        sticky
      }
    });
  }

  render() {
    const {
      state,
      handleSelectionChange,
      handleStatusChange,
      handleProductsChange,
      handleCollectionsChange,
      handleRightsRequest,
      handleStickyChange
    } = this;
    const {
      photo,
      products,
      collections,
      selectedPhotos
    } = state;

    return (
      <PhotoGridView
        photo={photo}
        products={products}
        collections={collections}
        selectedPhotos={selectedPhotos}
        onSelectionChange={handleSelectionChange}
        onStatusChange={handleStatusChange}
        onProductsChange={handleProductsChange}
        onCollectionsChange={handleCollectionsChange}
        onRightsRequest={handleRightsRequest}
        onStickyChange={handleStickyChange}
      />
    );
  }
}

export default ExampleComponent;