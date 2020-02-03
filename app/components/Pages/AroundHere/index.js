import React from 'react';

import SeoHead from 'components/Common/Seo/SeoHead';
import Map from 'components/Common/Map';

import { StyledNearByWrapper } from './styles';

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
      <StyledCityNameWrapper>

      </StyledCityNameWrapper>

    </StyledNearByWrapper>
  </>
);

export default AroundHere;
