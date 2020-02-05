import { universalCall } from '@snappmarket/helpers';
import endpoints from 'constants/endpoints';

export default {
  load({ ...params }) {
    const url = endpoints.USER.LOAD();
    return universalCall({
      url,
      method: 'post',
      params,
      withAuth: true,
    });
  },
  getProfile() {
    const url = endpoints.USER.PROFILE();
    return universalCall({
      url,
      method: 'get',
      withAuth: true,
    });
  },
  getAddresses({ hash, ...rest }) {
    const url = endpoints.USER.ADDRESSES({ hash });
    return universalCall({
      url,
      params: {
        ...rest,
      },
      method: 'get',
    });
  },
  addAddress({ latitude, longitude, address, phone, cityId }) {
    const url = endpoints.USER.ADD_ADDRESS();
    return universalCall({
      url,
      params: {
        latitude,
        longitude,
        address,
        phone,
        city_id: cityId,
      },
      method: 'post',
      withAuth: true,
    });
  },
  editAddress({ latitude, longitude, address, phone, cityId, addressId }) {
    const url = endpoints.USER.EDIT_ADDRESS();
    return universalCall({
      url,
      params: {
        latitude,
        longitude,
        address,
        phone,
        cityId,
        addressId,
      },
      method: 'post',
      withAuth: true,
    });
  },
  deleteAddress({ ...params }) {
    const url = endpoints.USER.DELETE_ADDRESS();
    return universalCall({
      url,
      params,
      method: 'post',
      withAuth: true,
    });
  },
};
