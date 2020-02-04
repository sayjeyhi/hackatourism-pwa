import React from 'react';
import PropTypes from 'prop-types';
import Map from 'components/Common/Map';
import APP_INFO from 'constants/appInfo';
import { StyledFullWidthMapWrapper } from './styles';

const FullWidthMap = ({ className, ...rest }) => (
  <StyledFullWidthMapWrapper
    className={`align-center justify-center ${className}`}
  >
    <div className="map-container">
      <Map {...rest} />
    </div>
  </StyledFullWidthMapWrapper>
);

FullWidthMap.propTypes = {
  className: PropTypes.string,
  // props
  initialPosition: PropTypes.object,
  mapZoom: PropTypes.number,
  onLocationChange: PropTypes.func,
  onLocationSubmit: PropTypes.func,
  isStatic: PropTypes.bool,
  searchForm: PropTypes.bool,
  locationAccess: PropTypes.bool,
  mapType: PropTypes.oneOf(Object.values(APP_INFO.MAP_TYPES)),
  // redux
  defaultLocation: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
};

export default FullWidthMap;