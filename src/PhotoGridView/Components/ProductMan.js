import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { AssignedPhoto } from '../Partials/AssignedPhoto';
import { AddProductsBtn } from '../Partials/AddProductsBtn';
import { AddProductsModal} from '../Partials/AddProductsModal';

export class ProductMan extends Component {
  constructor() {
    super();

    this.state = {
      modalVisible: false
    };

    this.handleClickCloseBtn = this.handleClickCloseBtn.bind(this);
    this.handleToggleModal = this.handleToggleModal.bind(this);
  }

  handleClickCloseBtn(id) {
    const products = this.props.products;
    const index = products.indexOf(id);
    products.splice(index, 1);
    this.props.onProductsChange(products);
  }

  handleToggleModal() {
    this.setState({
      modalVisible: !this.state.modalVisible
    });
  }

  render() {
    const { 
      allProducts, 
      products
    } = this.props;
    const { modalVisible } = this.state;
    const length = products.length;

    return (
      <div 
        className="photo-grid-productman-container"
      > 
        <div
          className={`d-flex align-items-center ${length > 3 && 'flex-grow-1'}`}
        >
          {
            products && products.map((id, index) => {
              const product = allProducts.find((item) => item.id === id);
              return (
                index < 3 &&
                <AssignedPhoto
                  id = {product.id}
                  title = {product.title}
                  image = {product.image}
                  key = {id}
                  handleClickCloseBtn = {this.handleClickCloseBtn}
                />
              );
            })
          }
          {
            length > 3 && (
              <span
                className="color__grey__light font-size_tiny ml-1"
              >
                {length - 3} more
              </span>
            )
          }       
        </div>
        <div
          className="d-flex align-items-center ml-1 position-relative"
          style={{ height: '80%' }}
        >
          <AddProductsBtn
            handleToggleModal={this.handleToggleModal}
          />
          {
            modalVisible &&
            <AddProductsModal
              allProducts={allProducts}
              products={products}
              handleToggleModal={this.handleToggleModal}
              onProductsChange={this.props.onProductsChange}
            />
          }
        </div>
        
      </div>
    );
  }
}

ProductMan.propTypes = {
  allProducts: PropTypes.array,
  products: PropTypes.array,
  onProductsChange: PropTypes.func
};

export default ProductMan;
