import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loadingActions, userActions, userSelectors } from 'ducks';

import { ConfirmDialog } from '@snappmarket/ui';
import { persianNumber } from '@snappmarket/helpers';

import TrashIcon from 'resources/svg/Icons/TrashIcon';
import mapMessages from 'constants/Messages/map.messages';
import APP_INFO from 'constants/appInfo';

const Index = props => {
  const {
    modalVisibility,
    setModalVisibility,
    vendorCode,
    address,
    clearApiStatus,
    deleteAddress,
    deleteAddressStatus,
    getAvailableAddresses,
  } = props;

  if (deleteAddressStatus === APP_INFO.API_STATUSES.SUCCESS) {
    setModalVisibility(false);
    clearApiStatus(userActions.deleteAddressRequest());
    getAvailableAddresses({ vendorCode });
  }

  return modalVisibility ? (
    <ConfirmDialog
      visibility={modalVisibility}
      title={mapMessages.deleteAddress.description}
      acceptTitle={mapMessages.deleteAddress.acceptButton}
      dismissTitle={mapMessages.deleteAddress.dismissButton}
      description={persianNumber(address.address)}
      icon={<TrashIcon />}
      onClose={() => {
        setModalVisibility(false);
      }}
      onAccept={() => {
        deleteAddress({ addressId: address.id });
        setModalVisibility(false);
      }}
      onDismiss={() => {
        setModalVisibility(false);
      }}
      loading={deleteAddressStatus === APP_INFO.API_STATUSES.REQUEST}
    />
  ) : null;
};

Index.propTypes = {
  address: PropTypes.object.isRequired,
  vendorCode: PropTypes.string,
  clearApiStatus: PropTypes.func,
  getAvailableAddresses: PropTypes.func,
  deleteAddress: PropTypes.func,
  deleteAddressStatus: PropTypes.string,
  modalVisibility: PropTypes.bool,
  setModalVisibility: PropTypes.func,
};

const mapStateToProps = state => ({
  vendorCode: vendorSelectors.getVendorCode(state),
  deleteAddressStatus: userSelectors.getDeleteAddressStatus(state),
});

export default connect(mapStateToProps, {
  clearApiStatus: loadingActions.clearOne,
  deleteAddress: userActions.deleteAddressRequest,
  getAvailableAddresses: vendorActions.getAvailableAddressesRequest,
})(Index);
