import React, { useState } from 'react';
import { Input } from '@snappmarket/ui';

import SeoHead from 'components/Common/Seo/SeoHead';
import Stars from 'components/Common/Stars';
import VoipCallIcon from 'resources/svg/VoipCallIcon';
import {
  StyledVoipSectionWrapper,
  StyledVoipBanner,
  StyledGetPhoneNumber,
  StyledChooseCity,
  StyledChooseAdviser,
} from './styles';

const AroundHere = () => {
  const [step, setNextStep] = useState('chooseCity');
  const [city, setCity] = useState({});
  const [phoneNumber, setPhoneNumber] = useState('');
  const makeVoipCall = () => {
    // todo: call alireza API here
  };

  const handleChangePhoneNumber = e => {
    if (e.target.value.length <= 11)
      setPhoneNumber(e.target.value.replace(/[^0-9۰-۹]/g, ''));
  };

  const handleChooseCity = e => {
    setCity({
      id: e.target.value,
      title: e.target.innerText,
    });
    setNextStep('chooseAdviser');
  };
  const handleChooseAdviser = () => {
    setNextStep('getCellPhone');
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

        {/* eslint-disable-next-line no-nested-ternary */}
        {step === 'chooseCity' ? (
          <StyledChooseCity className="flex-column">
            <h3>۱. انتخاب شهر </h3>
            <select onChange={handleChooseCity}>
              <option>انتخاب کنید</option>
              <option value="2">تهران</option>
            </select>
          </StyledChooseCity>
        ) : step === 'chooseAdviser' ? (
          <StyledChooseAdviser
            className="flex-column"
            visible={Object.keys(city).length === 0}
          >
            <h3>۲. انتخاب مشاور {city.name} </h3>
            <div className="justify-around ">
              <div className="adviser-holder">
                <div className="adviser-name">علیرضا جنگی</div>

                <div className="justify-center">
                  <Stars />
                </div>

                <div className="adviser-categories">
                  <div>متخصص حوزه سلامت</div>
                  <div>تکلم العربیه</div>
                </div>
                <div className="justify-center">
                  <button
                    onClick={handleChooseAdviser}
                    type="button"
                    className="no-effect-button make-call"
                  >
                    شروع صحبت آنلاین
                  </button>
                </div>
              </div>
            </div>
          </StyledChooseAdviser>
        ) : (
          <StyledGetPhoneNumber className="flex-column">
            <h3>۳. شروع صحبت برلحظه</h3>
            <div className="callFormContainer">
              <Input
                type="tell"
                id="phoneNumber"
                value={phoneNumber}
                onChange={handleChangePhoneNumber}
              />
              <button
                className="no-effect-button make-call"
                onClick={makeVoipCall}
                type="button"
              >
                ایجاد تماس
              </button>
            </div>
          </StyledGetPhoneNumber>
        )}
      </StyledVoipSectionWrapper>
    </>
  );
};

export default AroundHere;
