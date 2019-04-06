import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { Thumbnail } from './Components/Thumbnail';
import { Social } from './Components/Social';
import { ProductMan } from './Components/ProductMan';

export class PhotoGridView extends Component {
  constructor() {
    super();

    this.state = {

    };
  }

  render() {
    const { 
      photo, 
      products,
      onProductsChange
    } = this.props;
    return (
      <div
        className={`${this.props.selectedPhotos.includes(photo.id) ? 'selected-photo' : ''} photo-grid-container`}
      >
        <Thumbnail
          photo={photo}
          selectedPhotos={this.props.selectedPhotos}
          onStatusChange={this.props.onStatusChange}
          onRightsRequest={this.props.onRightsRequest}
          onStickyChange={this.props.onStickyChange}
          onSelectionChange={this.props.onSelectionChange}
        />
        <Social 
          source={photo.source}
          likes={photo.likes}
          comments={photo.comments}
        />
        <ProductMan 
          allProducts={products}
          products={photo.products}
          onProductsChange={onProductsChange}
        />
      </div>
    );
  }
}

PhotoGridView.propTypes = {
  photo: PropTypes.object,
  products: PropTypes.array,
  collections: PropTypes.array,
  selectedPhotos: PropTypes.array,
  onSelectionChange: PropTypes.func,
  onStatusChange: PropTypes.func,
  onProductsChange: PropTypes.func,
  onCollectionsChange: PropTypes.func,
  onRightsRequest: PropTypes.func,
  onStickyChange: PropTypes.func,
};

export default PhotoGridView;
