import { createSelector } from 'reselect';
import createStatusSelector from '../loading/selectors';
import actions from './actions';

const getProduct = state => state.product;
const getProductStatus = createStatusSelector(actions.getProductRequest());

export default {
  getProductDetail: createSelector(
    getProduct,
    product => product.productDetail,
  ),
  getProductStatus,
  getSelectedProduct: createSelector(
    getProduct,
    product => product.selectedProduct,
  ),
};
