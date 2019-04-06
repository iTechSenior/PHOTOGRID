import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

export class StatusButtonGroup extends Component {
  render() {
    const { photo } = this.props;
    return (
      <div>
        <div className="status-button-group d-flex">
          {
            photo.status === 'rejected' &&
            <div>
              <span
                data-tip="Rejected"
                className="badge custom-badge custom-badge_red status-badge icon__cross-error"
              >
              </span>
              <ReactTooltip
                effect="solid"
                offset={{top: 0}}
                className="custom-button-tooltip font-10"
              />
            </div>
          }
          {
            photo.sticky &&
            <div>
              <span
                data-tip="Sticky"
                className="badge custom-badge custom-badge_orange status-badge icon__pin"
              >
              </span>
              <ReactTooltip
                effect="solid"
                offset={{top: 0}}
                className="custom-button-tooltip font-10"
              />
            </div>
          }
          {
            photo.rightsGranted &&
            <div>
              <span
                data-tip="Copyright"
                className="badge custom-badge custom-badge_purple status-badge icon__copyright"
              >
              </span>
              <ReactTooltip
                effect="solid"
                offset={{top: 0}}
                className="custom-button-tooltip font-10"
              />
            </div>
          }
          {
            photo.status === 'approved' && 
            <div>
              <span
                data-tip="Approved"
                className="badge custom-badge custom-badge_green status-badge icon__check"
              >
              </span>
              <ReactTooltip
                effect="solid"
                offset={{top: 0}}
                className="custom-button-tooltip font-10"
              />
            </div>
          }
          {
            photo.comments && 
            <div>
              <span
                data-tip="This was mentioned"
                className="badge custom-badge custom-badge_green status-badge status-badge__small color__green icon__comments"
              >
              </span>
            </div>
          }
          {
            photo.errors && 
            <div>
              <span
                data-tip="Unhealthy Photo"
                className="badge custom-badge custom-badge_white status-badge status-badge__small color__red icon__error"
              >
              </span>
            </div>
          }
          <ReactTooltip
            effect="solid"
            offset={{top: 0}}
            className="custom-button-tooltip font-10"
          />
        </div>
      </div>
    );
  }
}

StatusButtonGroup.propTypes = {
  photo: PropTypes.object,
};

export default StatusButtonGroup;
