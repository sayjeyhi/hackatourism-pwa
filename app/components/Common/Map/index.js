import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import APP_INFO from 'constants/appInfo';
import map from 'constants/mapSettings';
import { mapSelectors } from 'ducks';

import MapboxAddMarker from './partials/MapboxAddMarker';
import TrackLocation from './partials/TrackLocation';
import SearchLocationForm from './partials/SearchLocationForm';
import { ModalProvider } from './context/mapContext';
import { StyledMapWrapper } from './styles';

const Map = props => {
  const {
    isStatic,
    mapType,
    initialPosition,
    mapZoom,
    onLocationChange,
    onLocationSubmit,
    locationAccess,
    searchForm,
    defaultLocation,
    markers,
  } = props;

  const [position, setPosition] = useState({
    lat: initialPosition.lat || defaultLocation.lat,
    lng: initialPosition.lng || defaultLocation.lng,
  });

  return (
    <ModalProvider
      value={{
        mapType,
        mapZoom,
        onLocationChange,
        onLocationSubmit,
        position,
        setPosition,
        isStatic,
        markers,
      }}
    >
      <StyledMapWrapper>
        {!isStatic && searchForm && <SearchLocationForm />}
        <MapboxAddMarker />
        {!isStatic && locationAccess && <TrackLocation />}
      </StyledMapWrapper>
    </ModalProvider>
  );
};

Map.propTypes = {
  // props
  initialPosition: PropTypes.object,
  mapZoom: PropTypes.number,
  onLocationChange: PropTypes.func,
  onLocationSubmit: PropTypes.func,
  isStatic: PropTypes.bool,
  searchForm: PropTypes.bool,
  locationAccess: PropTypes.bool,
  markers: PropTypes.array,
  mapType: PropTypes.oneOf(Object.values(APP_INFO.MAP_TYPES)),
  // redux
  defaultLocation: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
};

Map.defaultProps = {
  initialPosition: {},
  defaultLocation: {},
  mapZoom: map.zoom,
  mapType: APP_INFO.MAP_TYPES.SMAPP,
  onLocationChange: f => f,
  onLocationSubmit: f => f,
  isStatic: false,
  searchForm: true,
  markers: [],
  locationAccess: true,
};

const mapStateTopProps = state => ({
  defaultLocation: mapSelectors.getDefaultLocation(state),
});

export default connect(mapStateTopProps)(Map);
