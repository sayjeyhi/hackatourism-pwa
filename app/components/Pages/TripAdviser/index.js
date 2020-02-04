import React, { useState } from 'react';
import { Input } from '@snappmarket/ui';

import SeoHead from 'components/Common/Seo/SeoHead';
import VoipCallIcon from 'resources/svg/VoipCallIcon';
import {
  StyledVoipSectionWrapper,
  StyledVoipBanner,
  StyledCallFormContainer,
} from './styles';

const AroundHere = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const makeVoipCall = () => {
    // todo: call alireza API here
  };

  const handleChangePhoneNumber = e => {
    if (e.target.value.length <= 11)
      setPhoneNumber(e.target.value.replace(/[^0-9۰-۹]/g, ''));
  };

  return (
    <>
      <SeoHead title="سفر هوشمند" />
      <StyledVoipSectionWrapper className="align-center justify-center flex-column">
        <StyledVoipBanner className="align-center justify-center flex-column">
          <VoipCallIcon />
          <p>
            با ایجاد تماس امن و سریع اینترنتی مبتنی بر voip ، قبل از برنامه‌ریزی
            سفر با مشاوران خبره ما مشورت کنید
          </p>
        </StyledVoipBanner>
        <StyledCallFormContainer className="flex-row align-center">
          <Input
            id="phoneNumber"
            value={phoneNumber}
            onChange={handleChangePhoneNumber}
          />
          <button
            className="no-effect-button"
            onClick={makeVoipCall}
            type="button"
          >
            ایجاد تماس
          </button>
        </StyledCallFormContainer>
      </StyledVoipSectionWrapper>
    </>
  );
};

export default AroundHere;
