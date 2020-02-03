import React from 'react';

import SeoHead from 'components/Common/Seo/SeoHead';
import Map from 'components/Common/Map';

import { StyledNearByWrapper } from './styles';
import Footer from 'components/Common/Layout/partials/Footer';

const AroundHere = () => (
  <>
    <SeoHead title="همین حوالی" />
    <StyledNearByWrapper>
      <Map
        searchForm={false}
        locationAccess={false}
        initialPosition={{
          lat: 35.1,
          lng: 31.2,
        }}
        isStatic
      />
    </StyledNearByWrapper>

    <Footer />
  </>
);

export default AroundHere;
