import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export class AddProductsBtn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      btnOver: false,
      btnClick: false
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter() {
    this.setState({
      btnOver: true
    });
  }

  handleMouseLeave() {
    this.setState({
      btnOver: false
    });
  }

  render() {
    const { btnOver } = this.state;
    const { handleToggleModal } = this.props;
    return (
      <div
        className = {`assigned-products-add-btn ${btnOver && 'assigned-products-add-btn-over'}`}
        onMouseEnter = {this.handleMouseEnter}
        onMouseLeave = {this.handleMouseLeave}
        onClick = {handleToggleModal} 
      >
        <span
          className="icon__link mr-2 color__red__orange"
        />
        <span
          className="icon__plus color__red__orange"
        />
      </div>
    );
  }
}

AddProductsBtn.propTypes = {
  handleToggleModal: PropTypes.func
};

export default AddProductsBtn;