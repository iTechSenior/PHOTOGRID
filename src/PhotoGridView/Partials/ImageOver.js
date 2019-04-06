import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

export class ImageOver extends Component {
  constructor() {
    super();

    this.state = {
      isOver: -1,
      showDetailView: false
    };
  }

  changeColor(i) {
    this.setState({
      isOver: i
    });
  }

  handleMouseLeave = () => {
    this.setState({
      isOver: -1
    });
  }

  handleApprove = () => {
    this.props.onStatusChange('approved');
  }

  handleReject = () => {
    this.props.onStatusChange('rejected');
  }

  handleRightsRequest = () => {
    if (!this.props.photo.rightsGranted) {
      this.props.onRightsRequest();
    }
  }

  handleStickyChange = () => {
    this.props.onStickyChange(!this.props.photo.sticky);
  }

  toggleDetailView = () => {
    this.setState({
      showDetailView: !this.state.showDetailView
    });
  }

  render() {
    const { photo } = this.props;
    return (
      <div
        className="image-over-container w-100 h-125 br__radius-5"
      >
        <div
          style={{borderRadius: `${this.state.showDetailView ? '5px 5px 0 0' : ''}`}}
          className="image-over-top"
        >
          <div
            className="select__icon-block"
          >
            <input
              type="checkbox"
              checked={this.props.selectedPhotos.includes(photo.id)}
              className="checkbox__input over-image__checkbox icon__ch"
              onChange={() => this.props.onSelectionChange(photo.id)}
            />
            <div className="color__white font-11">
              20-08-2017, 4:08 pm
            </div>
          </div>
          <div
            className="show-detail w-100 font-13"
          >
            <div
              style={{cursor: 'pointer'}}
              onMouseEnter={this.toggleDetailView}
              onMouseLeave={this.toggleDetailView}
            >
              <span className="icon__dialog font-14"></span>
              <br />
              Show details
            </div>
          </div>
          <div
            className="d-flex justify-content-between action-block"
          >
            <button
              type="button"
              className={(photo.status === 'approved' ? 'bg__green custom-button__simple-active' : '') + ' btn custom-button custom-button__simple action-block__button'}
              onMouseEnter={!this.state.approved && this.changeColor.bind(this, 0)}
              onMouseLeave={this.handleMouseLeave}
              onClick={this.handleApprove}
            >
              <span
                data-tip={photo.status === 'approved' ? 'Approved' : 'Approve'}
                data-for="button-group"
                className={'icon__check font-15 ' + (this.state.isOver === 0 ? 'color__green' : 'color__grey')}
              >
              </span>
            </button>
            <button
              type="button"
              className={(photo.status === 'rejected' ? 'bg__red custom-button__simple-active' : '') + ' btn custom-button custom-button__simple action-block__button'}
              onMouseEnter={!this.state.approved && this.changeColor.bind(this, 1)}
              onMouseLeave={this.handleMouseLeave}
              onClick={this.handleReject}
            >
              <span
                data-tip={photo.status === 'rejected' ? 'Rejected' : 'Reject'}
                data-for="button-group"
                className={'icon__cross-close font-14 ' + (this.state.isOver === 1 ? 'color__red' : 'color__grey')}
              >
              </span>
            </button>
            <button
              type="button"
              className={(photo.rightsGranted ? 'bg__purple custom-button__simple-active' : '') + ' btn custom-button custom-button__simple action-block__button'}
              onMouseEnter={!this.state.approved && this.changeColor.bind(this, 2)}
              onMouseLeave={this.handleMouseLeave}
              onClick={this.handleRightsRequest}
            >
              <span
                data-tip="Copyright"
                data-for="button-group"
                className={'icon__copyright font-14 ' + (this.state.isOver === 2 ? 'color__green' : 'color__grey')}
              >
              </span>
            </button>
            <button
              type="button"
              className={(photo.sticky ? 'bg__orange custom-button__simple-active' : '') + ' btn custom-button custom-button__simple action-block__button'}
              onMouseEnter={!this.state.approved && this.changeColor.bind(this, 3)}
              onMouseLeave={this.handleMouseLeave}
              onClick={this.handleStickyChange}
            >
              <span
                data-tip="Sticky"
                data-for="button-group"
                className={'icon__more font-14 ' + (this.state.isOver === 3 ? 'color__red__light' : 'color__grey')}
              >
              </span>
            </button>
            <ReactTooltip
              id="button-group"
              effect="solid"
              offset={{top: 5}}
              className="custom-button-tooltip font-11"
            />
          </div>
        </div>
        {
          this.state.showDetailView &&
          <div
            className="detail-view-container"
          >
            <hr className="divider" />
            <div
              className="detail-block"
            >
              { 
                photo.description.length > 100 
                ? (photo.description.substr(0, 100) + ' ...')
                : photo.description
              }
            </div>
          </div>
        }
      </div>
    );
  }
}

ImageOver.propTypes = {
  photo: PropTypes.object,
  selectedPhotos: PropTypes.array,
  onStatusChange: PropTypes.func,
  onRightsRequest: PropTypes.func,
  onStickyChange: PropTypes.func,
  onSelectionChange: PropTypes.func
};

export default ImageOver;