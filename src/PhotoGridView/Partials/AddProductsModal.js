import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export class AddProductsModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      staticProducts: [],
      selectedProduct: null,
      search: ''
    };

    this.handleClickProduct = this.handleClickProduct.bind(this);
    this.handleClickAddBtn = this.handleClickAddBtn.bind(this);
    this.handleSearchProduct = this.handleSearchProduct.bind(this);
  }

  componentDidMount() {
    const { products, allProducts } = this.props;
    const newProducts = [];
    allProducts.map((product) => {
      const index = products.indexOf(product.id);
      if (index === -1) {
        newProducts.push(product);
      }
      return 0;
    });
    this.setState({
      products: newProducts,
      staticProducts: newProducts
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { products, allProducts } = prevProps;
    if (allProducts.length - products.length !== this.state.products.length && prevState.search === this.state.search) {
      const newProducts = [];
      allProducts.map((product) => {
        const index = products.indexOf(product.id);
        if (index === -1) {
          newProducts.push(product);
        }
        return 0;
      });
      this.setState({
        products: newProducts,
        staticProducts: newProducts,
        search: ''
      });
    }
  }

  handleClickProduct(id) {
    this.setState({
      selectedProduct: id
    });
  }

  handleSearchProduct(e) {
    const value = e.target.value;
    const { staticProducts } = this.state;
    const newProducts = [];
    staticProducts.map((product) => {
      if (product.title.toLowerCase().includes(value)) {
        newProducts.push(product);
      }
      return 0;
    });
    this.setState({
      search: value,
      products: newProducts
    });
  }

  handleClickAddBtn() {
    const { selectedProduct } = this.state;
    const { products, onProductsChange, handleToggleModal } = this.props;
    if (selectedProduct) {
      products.push(selectedProduct);
      onProductsChange(products);
      handleToggleModal();
    } else {
      return;
    }
  }

  render() {
    const { products, selectedProduct, search } = this.state;
    const { handleToggleModal } = this.props;
    return (
      <div
        className="assigned-product-add-modal dropdown-menu custom-dropdown__menu d-block m-0 p-0"
      >
        <div
          className="d-flex"
        >
          <div>
            <div
              className="custom-dropdown__input_container custom-dropdown__input_container_wide p-1"
            >
              <div 
                className="position-relative"
              >
                <input 
                  type="text" 
                  className="w-100" 
                  placeholder="Type to filter product list..."
                  value={search}
                  onChange={(e) => this.handleSearchProduct(e)}
                />
                <span 
                  className="input_icon input_icon-right icon__search"
                />
              </div>
            </div>
            <div 
              className="custom-dropdown__scroll-container assigned-products-scroll-container"
            >
              <div
                style={{ 
                  width: 'fit-content',
                  minWidth: '100%'
                }}
              >
                {
                  products && products.map((product) => {
                    return (
                      <button 
                        type="button" 
                        className={`dropdown-item custom-dropdown__item d-flex align-items-center ${selectedProduct !== product.id ? 'custom-dropdown__item_default' : 'custom-dropdown__item_selected'}`}
                        key={product.id}
                        onClick={() => this.handleClickProduct(product.id)}
                      >
                        <img 
                          src={product.image}
                          className="custom-dropdown__big-image"
                          alt={product.title}
                        />
                        <span 
                          className="flex-grow-1 ml-3"
                        >
                          {product.title}
                        </span>
                        {
                          selectedProduct === product.id &&
                          <span
                            className="icon__check"
                          />
                        }
                      </button>
                    );
                  })
                }
              </div>         
            </div>
          </div>
          <div>
            <div 
              className="custom-dropdown__header custom-dropdown__header_wide px-3"
            >
              Is it one of these?
            </div>

            <div 
              className="custom-dropdown__scroll-container"
            >
              <button 
                type="button" 
                className="dropdown-item custom-dropdown__item custom-dropdown__item_default d-flex align-items-center"
              >
                <img 
                  src="https://cdn1-www.cattime.com/assets/uploads/2011/12/file_2718_chartreux-460x290-460x290.jpg" 
                  className="custom-dropdown__big-image"
                  alt="asdf"
                />
                <span 
                  className="flex-grow-1 ml-3"
                >
                  Chartreux
                </span>
              </button>
            </div>
          </div>
        </div>
        <div 
          className="custom-dropdown__footer d-flex justify-content-end"
        >
          <button 
            type="button" 
            className="custom-dropdown__footer-button custom-dropdown__footer-button_default"
            onClick={handleToggleModal}
          >
            Cancel
          </button>
          <button 
            type="button" 
            className="custom-dropdown__footer-button custom-dropdown__footer-button_action ml-3"
            onClick={this.handleClickAddBtn}
          >
            Add selected
          </button>
        </div>
      </div>
    );
  }
}

AddProductsModal.propTypes = {
  allProducts: PropTypes.array,
  products: PropTypes.array,
  handleToggleModal: PropTypes.func,
  handleProductsChange: PropTypes.func
};

export default AddProductsModal;