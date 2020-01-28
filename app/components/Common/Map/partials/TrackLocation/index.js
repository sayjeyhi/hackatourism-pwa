import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Icon } from '@snappmarket/ui';
import { useGeoLocation } from '@snappmarket/hooks';
import { isLocationInIran } from '@snappmarket/helpers';
// import Icon from 'components/Global/Icon';
import mapMessages from 'constants/Messages/map.messages';
import appInfo from 'constants/appInfo';
import useLog from 'constants/Hooks/useLog';
// import useGeoLocation from 'constants/Hooks/useGeoLocation';
// import { isLocationInIran } from 'constants/Helpers/mapHelpers';

import { messageActions } from 'ducks/index';
import { context as mapContext } from '../../context/mapContext';
import { StyledUserTrackButton } from './styles';

const TrackLocation = props => {
  const { writeLog } = useLog();
  const didMountRef = useRef({ value: 0 });
  const [tick, setTick] = useState(0);
  const { setPosition, onLocationChange } = useContext(mapContext);
  const [position, error] = useGeoLocation(appInfo.LOCATION_ACCESS_TIMEOUT);
  const { showErrorToast } = props;
  const loading = !position && !error;

  useEffect(() => {
    if (didMountRef.current.value > 1) {
      if (loading) {
        writeLog({
          medium: 'track location button',
          action: 'click',
          detail: `ask for access to user location`,
        });
      }

      if (error) {
        let message = mapMessages.map.getUserLocation.error.dismissed;
        /**
         * User denied location access
         */
        if (error.code === error.PERMISSION_DENIED) {
          message = mapMessages.map.getUserLocation.error.permissionDenied;
        }

        /**
         * Todo: show message with toast
         */
        writeLog({
          medium: 'location access',
          action: 'click',
          detail: `geo location disabled, message:${message}`,
        });
      }

      if (position) {
        const {
          coords: { latitude: lat, longitude: lng },
        } = position;

        // check of tracked location in iran
        if (!isLocationInIran(lat, lng)) {
          showErrorToast({
            title: mapMessages.map.outOfIranAddressChoose,
          });
        } else {
          setPosition({ lat, lng });
          onLocationChange({ lat, lng });
          writeLog({
            medium: 'location access',
            action: 'click',
            detail: `geo location enabled [${lat} ${lng}]`,
          });
        }
      }
    }
  }, [position, error, tick]);

  // handle mounting
  useEffect(() => {
    didMountRef.current.value = parseInt(didMountRef.current.value, 10) + 1;
  }, [position, error, tick]);

  const handleForceUpdate = () => {
    setTick(tick + 1);
  };

  return (
    <StyledUserTrackButton
      type="button"
      disabled={loading}
      onClick={handleForceUpdate}
    >
      <Icon
        size={2}
        name={loading ? 'spinner' : 'paper-rocket-o'}
        className={loading ? 'spinner' : ''}
      />
    </StyledUserTrackButton>
  );
};

TrackLocation.propTypes = {
  showErrorToast: PropTypes.func,
};

export default connect(null, {
  showErrorToast: messageActions.showErrorToast,
})(TrackLocation);
