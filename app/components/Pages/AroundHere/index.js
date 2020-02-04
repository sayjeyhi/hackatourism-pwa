import React from 'react';

import SeoHead from 'components/Common/Seo/SeoHead';
import Map from 'components/Common/Map';

import Footer from 'components/Common/Layout/partials/Footer';
import { StyledNearByWrapper } from './styles';

const AroundHere = () => (
  <>
    <SeoHead title="همین حوالی" />
    <StyledNearByWrapper className="align-center justify-center">
      <div className="map-container">
        <Map
          searchForm={false}
          locationAccess={false}
          initialPosition={{
            lat: 35.1,
            lng: 31.2,
          }}
          isStatic
        />
      </div>
    </StyledNearByWrapper>

    <Footer />
  </>
);

export default AroundHere;
