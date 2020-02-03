import React from 'react';
import Map from 'components/Common/Map';
import SeoHead from 'components/Common/Seo/SeoHead';
import { StyledNearByWrapper } from './styles';

const City = () => (
  <>
    <SeoHead title="اطلاعات شهر" />
    <StyledCityPageWrapper>
      <Map
        searchForm={false}
        locationAccess={false}
        initialPosition={{
          lat: 35.1,
          lng: 31.2,
        }}
        isStatic
      />
      <StyledCityNameWrapper>همدان</StyledCityNameWrapper>
    </StyledCityPageWrapper>
  </>
);

export default City;
