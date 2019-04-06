import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export class SocialDetail extends Component {
  render() {
    const { className, value } = this.props;
    return (
      <React.Fragment>
        <span 
          className={`icon__${className} font-16 color__grey__light ml-3 mr-1`}
        />
        <span
          className="font-size_tiny photo-social-detail-text color__grey__light"
        >
          {value}
        </span>
      </React.Fragment>
    );
  }
}

SocialDetail.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number
};

export default SocialDetail;