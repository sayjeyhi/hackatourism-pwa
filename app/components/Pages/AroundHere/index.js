import React, { useState } from 'react';

import SeoHead from 'components/Common/Seo/SeoHead';

import Footer from 'components/Common/Layout/partials/Footer';
import FullWidthMap from 'components/Common/FullWidthMap';
import { NearByIcon } from 'resources/svg/HomeIcons';
import { StyledChooseLocation } from './styles';

const AroundHere = () => {
  const [choosingLocation, setChoosingLocation] = useState('');
  const handleSetChoosing = () => {
    if (choosingLocation === '') {
      setChoosingLocation('choosing');
    } else {
      setChoosingLocation('chose');
    }
  };

  return (
    <>
      <SeoHead title="همین حوالی" />
      <FullWidthMap
        searchForm={choosingLocation}
        locationAccess={false}
        initialPosition={{
          lat: 35.7231273,
          lng: 51.3877295,
        }}
        mapZoom={15}
        isStatic={!choosingLocation}
      />

      <div className="align-center justify-center ">
        <StyledChooseLocation
          className={`align-center justify-center flex-column ${
            choosingLocation === '' ? 'not-chose' : 'did-chose'
          }`}
        >
          <div className="flex-column justify-center align-center">
            <NearByIcon />
            نزدیکای من کیا و چیا هستن؟
          </div>
          <button
            type="button"
            onClick={handleSetChoosing}
            className="no-effect-button"
          >
            {choosingLocation === 'chose' ? 'تغییر موقعیت' : 'انتخاب موقعیت'}
          </button>
        </StyledChooseLocation>
      </div>

      <div className="mt-5 pt-4 justify-center">
        <Footer />
      </div>
    </>
  );
};

export default AroundHere;
