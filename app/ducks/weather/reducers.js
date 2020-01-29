import productsTypes from './types';

const productDefaultState = {
  selectedProduct: null,
  productDetail: null,
};

const productReducer = (state = productDefaultState, action) => {
  switch (action.type) {
    case productsTypes.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        productDetail: action.payload,
      };
    case productsTypes.OPEN_PRODUCT_MODAL:
      return {
        ...state,
        selectedProduct: action.payload,
      };
    case productsTypes.CLOSE_PRODUCT_MODAL:
      return {
        ...state,
        selectedProduct: null,
      };
    default:
      return state;
  }
};

export default productReducer;
