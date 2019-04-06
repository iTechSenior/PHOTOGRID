import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import ReactTooltip from 'react-tooltip';

export class AssignedPhoto extends Component {
  constructor() {
    super();
    
    this.state = {
      photoOver: false
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter() {
    this.setState({
      photoOver: true
    });
  }

  handleMouseLeave() {
    this.setState({
      photoOver: false
    });
  }

  render() {
    const { 
      id, 
      title, 
      image,
      handleClickCloseBtn
    } = this.props;
    const { photoOver } = this.state;
    return (
      <div
        className="assigned-product-photo-container"
      >
        <img
          src={image}
          alt={title}
          className={`br__radius-5 ${photoOver ? 'w-100' : 'w-80'}`}
          style={{ cursor: 'pointer' }}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          data-tip={title}
          data-for="test"
        />
        {
          photoOver && 
          <div
            className="assigned-product-cancel-container"
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
          >
            <span
              className="icon__cross-close color__white"
              onClick={() => handleClickCloseBtn(id)}
            />
          </div>
        }
        <ReactTooltip 
          id="test"
          place="top"
          effect="solid"
        />
      </div>
    );
  }
}

AssignedPhoto.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
  handleClickCloseBtn: PropTypes.func
};

export default AssignedPhoto;