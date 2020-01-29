import { universalCall } from '@snappmarket/helpers';
import endpoints from 'constants/endpoints';

export default {
  getProduct({ vendorCode, productId }) {
    const url = endpoints.VENDOR.GET_PRODUCT({ vendorCode, productId });
    return universalCall({
      url,
      method: 'get',
    });
  },
};
