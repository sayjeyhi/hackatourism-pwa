import React, { useState } from 'react';
import { Button, Input } from '@snappmarket/ui';
import { connect } from 'react-redux';

import SeoHead from 'components/Common/Seo/SeoHead';
import Stars from 'components/Common/Stars';
import Loading from 'components/Common/Loading';
import VoipCallIcon from 'resources/svg/VoipCallIcon';
import CommentsIcon from 'resources/svg/CommentsIcon';
import {
  StyledVoipSectionWrapper,
  StyledVoipBanner,
  StyledGetPhoneNumber,
  StyledChooseCity,
  StyledChooseAdviser,
  StyledLoading,
} from './styles';

const AroundHere = () => {
  const [step, setNextStep] = useState('chooseCity');
  const [city, setCity] = useState({});
  const [phoneNumber, setPhoneNumber] = useState('');
  const [adviser, setAdviser] = useState('');

  const makeVoipCall = () => {
    setNextStep('callingVoip');
    // todo: call alireza API here
    console.log(adviser);
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
  const handleChooseAdviser = adviser => {
    setAdviser(adviser);
    setNextStep('getCellPhone');
  };

  const handleCancelCall = () => {
    setNextStep('chooseCity');
  };

  const advisers = [
    {
      name: 'علیرضا جنگی',
      id: 1,
      categories: ['حوزه سلامت', 'تکلم العربیه'],
      rate: 5,
    },
    {
      name: 'جعفر رضايي',
      id: 2,
      categories: ['مشاور گردشگری', 'english'],
      rate: 4,
    },
    {
      name: 'محمدعلی نجاتی',
      id: 2,
      categories: ['مشاور سلامت', ' ترنسفر'],
      rate: 2,
    },
  ];

  return (
    <>
      <SeoHead title="سفر هوشمند" />
      <StyledVoipSectionWrapper className="align-center justify-center flex-column pb-3 mb-2">
        <StyledVoipBanner className="align-center justify-center flex-column">
          <VoipCallIcon />
          <p>
            با ایجاد تماس امن و سریع اینترنتی مبتنی بر voip ، قبل از برنامه‌ریزی
            سفر با مشاوران خبره ما مشورت کنید
          </p>

          <Button
            title="ارسال تیکت"
            color="green"
            size="sm"
            shade="light"
            modifier="outline"
            className="m-1 send-ticket"
            icon={CommentsIcon}
          />
        </StyledVoipBanner>

        {/* eslint-disable-next-line no-nested-ternary */}
        {step === 'chooseCity' ? (
          <StyledChooseCity className="flex-column">
            <h3>۱. انتخاب شهر <span className="text-small pull-left text-gray-normal">[انتخاب کنید]</span></h3>
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
            <h3>۲. انتخاب مشاور {city.name} <span className="text-small pull-left text-gray-normal">[انتخاب کنید]</span></h3>
            <div className="justify-around ">
              {advisers.map(adviser => (
                <div className="adviser-holder">
                  <div className="adviser-name">{adviser.name}</div>

                  <div className="justify-center">
                    <Stars chose={adviser.rate} />
                  </div>

                  <div className="adviser-categories">
                    {adviser.categories.map(category => (
                      <div>{category}</div>
                    ))}
                  </div>
                  <div className="justify-center">
                    <button
                      onClick={() => handleChooseAdviser(adviser)}
                      type="button"
                      className="no-effect-button make-call"
                    >
                      شروع صحبت آنلاین
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </StyledChooseAdviser>
        ) : step === 'getCellPhone' ? (
          <StyledGetPhoneNumber className="flex-column">
            <h3>۳. شروع مشاوره برلحظه</h3>
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
        ) : (
          <StyledGetPhoneNumber className="flex-column">
            <h3>۴. برقراری مشاوره برخط</h3>
            <StyledLoading className="justify-center align-center flex-column">
              <Loading />
              <span className="text-large text-bold text-gray-normal">
                در حال برقراری تماس...
              </span>
              <Button
                onClick={handleCancelCall}
                className="mt-2 text-white"
                color="red"
                shade="light"
                title="لفو تماس"
                size="sm"
              />
            </StyledLoading>
          </StyledGetPhoneNumber>
        )}
      </StyledVoipSectionWrapper>
    </>
  );
};

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, {
  ff
})(AroundHere);
