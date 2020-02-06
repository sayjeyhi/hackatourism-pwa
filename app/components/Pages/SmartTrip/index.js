import React from 'react';
import SeoHead from 'components/Common/Seo/SeoHead';
import { StyledSmartTripWrapper } from './styles';

const AroundHere = () => {
  return (
    <>
      <SeoHead title="سفر هوشمند" />
      <StyledSmartTripWrapper>
        <div className="from-city">
          <select name="choose-from-city" id="choose-from-city">
            <option value="1">
              تهران
            </option>
            <option value="2">
              کیش
            </option>
          </select>
        </div>
        <div className="to-city"></div>
      </StyledSmartTripWrapper>
    </>
  );
};

export default AroundHere;
