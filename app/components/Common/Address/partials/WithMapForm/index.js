import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import mapMessages from 'constants/Messages/map.messages';

import { Modal } from '@snappmarket/ui';
import AddressForm from './loadable';

const WithMapForm = props => {
  const { mode, address, modalVisibility, setModalVisibility } = props;

  return useMemo(() => {
    /**
     * No address supplied
     */
    if (!address.address && mode !== 'add') {
      return null;
    }

    return (
      modalVisibility && (
        <Modal
          visibility={modalVisibility}
          handleClose={() => setModalVisibility(false)}
          header={
            <h3 className="m-1 text-center">
              {mode === 'edit'
                ? mapMessages.editAddress.title
                : mapMessages.addAddress.addNewAddress}
            </h3>
          }
        >
          <AddressForm
            mode={mode}
            address={address}
            setModalVisibility={setModalVisibility}
          />
        </Modal>
      )
    );
  }, [modalVisibility, mode, address.address, address.lat, address.lng]);
};

WithMapForm.propTypes = {
  mode: PropTypes.oneOf(['edit', 'add']),
};

export default WithMapForm;
