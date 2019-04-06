import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { SocialDetail } from '../Partials/SocialDetail';
export class Social extends Component {

  render() {
    const { source, likes, comments } = this.props;
    const { provider, username, url } = source;
    return (
      <div 
        className="photo-grid-social-container w-100"
      >
        <div className="photo-social-author-info">
          <a 
            target="_blank"
            href={url} 
            style={{ textDecoration: 'none' }}
            rel="noopener noreferrer"
          >
            <span 
              className={`icon__social-${provider} font-16 mr-2 color__grey`}
            />
            <span
              className="font-size_caption f__weight-semi photo-social-author-name"
            >
              {username}
            </span>
          </a>          
        </div>
        <div>
          <SocialDetail
            className="likes"
            value={likes}
          />
          <SocialDetail
            className="comments"
            value={comments}
          />
        </div>
      </div>
    );
  }
}

Social.propTypes = {
  source: PropTypes.object,
  likes: PropTypes.number,
  comments: PropTypes.number
};

export default Social;