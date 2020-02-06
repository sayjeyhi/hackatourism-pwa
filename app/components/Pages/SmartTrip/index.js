import React from 'react';
import SeoHead from 'components/Common/Seo/SeoHead';
import { StyledSmartTripWrapper } from './styles';

const AroundHere = () => (
  <>
    <SeoHead title="سفر هوشمند" />
    <StyledSmartTripWrapper className="flex-row justify-around">
      <div className="from-city">
        <label htmlFor="choose-from-city">از :</label>
        <select name="choose-from-city" id="choose-from-city">
          <option value="1">تهران</option>
          <option value="2">کیش</option>
        </select>
      </div>
      <div className="to-city">
        <label htmlFor="choose-to-city">به :</label>
        <select name="choose-to-city" id="choose-to-city">
          <option value="1">تهران</option>
          <option value="2">کیش</option>
        </select>
      </div>
    </StyledSmartTripWrapper>
  </>
);

export default AroundHere;
