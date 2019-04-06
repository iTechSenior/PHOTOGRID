import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { ImageOver } from '../Partials/ImageOver';
import { StatusButtonGroup } from '../Partials/StatusButtonGroup';

export class Thumbnail extends Component {
  constructor() {
    super();

    this.state = {
      isOver: false
    };
  }

  // toggleOver = () => {
  //   this.setState({
  //     isOver: !this.state.isOver
  //   },() => {
  //     console.log('isOver', this.state.isOver);
  //   });
  // };
  showOverlay = () => {
    this.setState({
      isOver: true
    });
  }
  hideOverlay = (e) => {
    if (e.target.width !== 0) {
      this.setState({
        isOver: false
      });
    }
  }

  render() {
    const { props } = this;
    return (
      <div
        style={{backgroundImage: `url(${props.photo.imageUrl})`}}
        className="photo-grid-thumbnail-container br__radius-5"
        onMouseEnter={this.showOverlay}
        onMouseLeave={(e) => this.hideOverlay(e)}
      >
        <StatusButtonGroup
          photo={props.photo}
        />
        {
          props.photo.mentioned &&
          <div className="triangle">
            <span className="icon__star triangle__star font-14"></span>
          </div>
        }
        {
          this.state.isOver &&
          <ImageOver
            photo = {props.photo}
            selectedPhotos={props.selectedPhotos}
            onStatusChange = {props.onStatusChange}
            onRightsRequest = {props.onRightsRequest}
            onStickyChange = {props.onStickyChange}
            onSelectionChange = {props.onSelectionChange}
          />
        }
      </div>
    );
  }
}

Thumbnail.propTypes = {
  photo: PropTypes.object,
  selectedPhotos: PropTypes.array,
  onStatusChange: PropTypes.func,
  onRightsRequest: PropTypes.func,
  onStickyChange: PropTypes.func,
  onSelectionChange: PropTypes.func
};

export default Thumbnail;