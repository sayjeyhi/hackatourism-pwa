import { actionMaker } from '@snappmarket/helpers';
import productsTypes from './types';

export default {
  getProductRequest: payload =>
    actionMaker(productsTypes.GET_PRODUCT_REQUEST, payload),
  getProductSuccess: payload =>
    actionMaker(productsTypes.GET_PRODUCT_SUCCESS, payload),
  getProductFailure: payload =>
    actionMaker(productsTypes.GET_PRODUCT_FAILURE, payload),

  openProductModal: payload =>
    actionMaker(productsTypes.OPEN_PRODUCT_MODAL, payload),
  closeProductModal: () => actionMaker(productsTypes.CLOSE_PRODUCT_MODAL),
};
