import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  loadingActions,
  mapActions,
  mapSelectors,
  userActions,
} from 'ducks/index';

import { Button } from '@snappmarket/ui';
import Map from 'components/Common/Map';
import mapMessages from 'constants/Messages/map.messages';
import APP_INFO from 'constants/appInfo';
import { StyledFormContainer, StyledMapContainer } from './styles';

const FormContent = props => {
  const {
    initialLocation,
    setSelectedAddress,
    reversedAddress,
    reverseGeoCode,
    reverseGeoCodeStatus,
    clearLoadingStatus,
    setModalVisibility,
    onSubmit,
  } = props;

  const [location, setLocation] = useState({
    lat: initialLocation.lat,
    lng: initialLocation.lng,
  });

  const handleLocationChange = loc => {
    setLocation(loc);
  };

  const handleSubmitAddress = e => {
    e.preventDefault();

    reverseGeoCode({
      lat: location.lat,
      lng: location.lng,
      cityId: 1,
    });
  };

  // after location choose close modal and set data to store
  if (reverseGeoCodeStatus === APP_INFO.API_STATUSES.SUCCESS) {
    setSelectedAddress({
      lat: location.lat,
      lng: location.lng,
      address: reversedAddress,
      setByUser: true,
    });
    clearLoadingStatus(mapActions.reverseGeoCoderRequest());
    setModalVisibility(false);
    onSubmit();
  }

  return (
    <form onSubmit={handleSubmitAddress}>
      <StyledFormContainer>
        <StyledMapContainer>
          <Map
            initialPosition={initialLocation}
            isStatic={false}
            mapType="smapp"
            onLocationChange={handleLocationChange}
          />
        </StyledMapContainer>
        ‌
        <Button
          size="md"
          type="submit"
          title={mapMessages.selectAddress.title}
          direction="left"
          loading={reverseGeoCodeStatus === APP_INFO.API_STATUSES.REQUEST}
          fullWidth
        />
      </StyledFormContainer>
    </form>
  );
};

FormContent.propTypes = {
  // props
  onSubmit: PropTypes.func,
  setModalVisibility: PropTypes.func,
  initialLocation: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
  // redux
  setSelectedAddress: PropTypes.func,
  clearLoadingStatus: PropTypes.func,
  reverseGeoCode: PropTypes.func,
  reverseGeoCodeStatus: PropTypes.string,
  reversedAddress: PropTypes.string,
};

FormContent.defaultProps = {
  initialLocation: {},
};

const mapStateToProps = state => ({
  reversedAddress: mapSelectors.getReversedAddress(state),
  reverseGeoCodeStatus: mapSelectors.getReverseGeoCoderStatus(state),
});

export default connect(mapStateToProps, {
  reverseGeoCode: mapActions.reverseGeoCoderRequest,
  setSelectedAddress: userActions.setSelectedAddress,
  clearLoadingStatus: loadingActions.clearOne,
})(FormContent);
