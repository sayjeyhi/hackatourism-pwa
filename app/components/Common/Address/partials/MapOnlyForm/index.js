import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import mapMessages from 'constants/Messages/map.messages';
import { Modal } from '@snappmarket/ui';
import FormContent from './loadable';

const MapOnlyForm = props => {
  const { visibility, setVisibility, onSubmit, initialLocation } = props;
  return useMemo(() => {
    if (!visibility) {
      return null;
    }

    return (
      visibility && (
        <Modal
          visibility={visibility}
          handleClose={() => setVisibility(false)}
          header={
            <h3 className="m-1 text-center">
              {mapMessages.selectAddress.title}
            </h3>
          }
        >
          <FormContent
            setModalVisibility={setVisibility}
            onSubmit={onSubmit}
            initialLocation={initialLocation}
          />
        </Modal>
      )
    );
  }, [visibility]);
};

MapOnlyForm.propTypes = {
  visibility: PropTypes.bool,
  setVisibility: PropTypes.func,
  onSubmit: PropTypes.func,
};

MapOnlyForm.defaultProps = {
  onSubmit: f => f,
};

export default MapOnlyForm;
