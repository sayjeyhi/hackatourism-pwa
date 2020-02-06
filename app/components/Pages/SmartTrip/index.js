import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CheckBox, Button, Tab, TabPanel, TabSwitcher } from '@snappmarket/ui';

import AirPlaneIcon from 'resources/svg/Icons/AirPlaneIcon';
import BusIcon from 'resources/svg/Icons/BusIcon';
import TrainIcon from 'resources/svg/Icons/TrainIcon';
import SeoHead from 'components/Common/Seo/SeoHead';
import routes from 'components/Common/Router/routes';
import {
  StyledSmartTripWrapper,
  StyledDestinationsList,
  StyledResultHeader,
} from './styles';

const AroundHere = () => {
  const [fromCity, setFromCity] = useState({});
  const [toCity, setToCity] = useState({});
  const [getDestinations, setGetDestinations] = useState(false);
  const handleFormSubmit = () => {
    if(Object.keys(fromCity).length > 0 && Object.keys(toCity).length > 0) {
      setGetDestinations(!getDestinations);
    }else{
      alert("ابتدا مبدا و مقصد را انتخاب کنید");
    }
  };

  const handleChangeFromCity = e => {
    const index = e.nativeEvent.target.selectedIndex;
    const selectedText = e.nativeEvent.target[index].text;
    setFromCity({ id: e.target.value, title: selectedText });
  };

  const handleChangeToCity = e => {
    const index = e.nativeEvent.target.selectedIndex;
    const selectedText = e.nativeEvent.target[index].text;
    setToCity({ id: e.target.value, title: selectedText });
  };

  return (
    <>
      <SeoHead title="سفر هوشمند" />
      <StyledSmartTripWrapper className="flex-row justify-around">
        <TabSwitcher initialTab="bus-trip">
          {!getDestinations && (
            <>
              <Tab id="bus-trip">
                <BusIcon />
                با اتوبوس
              </Tab>
              <Tab id="train-trip">
                <TrainIcon />
                با قطار
              </Tab>
              <Tab id="flight-trip">
                <AirPlaneIcon />
                با هواپیما
              </Tab>
            </>
          )}
          <TabPanel whenActive="bus-trip">
            <div
              className={`flex-row justify-between mt-g mb-5 ${
                !getDestinations ? 'd-flex' : 'd-none'
              }`}
            >
              <div className="from-city">
                <label htmlFor="choose-from-city">از :</label>
                <select
                  onChange={handleChangeFromCity}
                  name="choose-from-city"
                  id="choose-from-city"
                >
                  <option value="-">انتخاب کنید</option>
                  <option value="1">تهران</option>
                  <option value="2">کیش</option>
                </select>
              </div>
              <div className="to-city">
                <label htmlFor="choose-to-city">به :</label>
                <select
                  onChange={handleChangeToCity}
                  name="choose-to-city"
                  id="choose-to-city"
                >
                  <option value="-">انتخاب کنید</option>
                  <option value="1">تهران</option>
                  <option value="2">کیش</option>
                </select>
              </div>
            </div>

            <div className="flex-column">
              <div
                className={`chechbox-search mt-1 mb-1 seperate-bottom ${
                  !getDestinations ? 'd-flex' : 'd-none'
                }`}
              >
                <CheckBox
                  selected={false}
                  id="showAllPosibileThings"
                  disabled
                />
                <label htmlFor="showAllPosibileThings" className="mr-1">
                  {' '}
                  نمایش سفرهای نوع دیگر
                </label>
              </div>

              <div className="flex-row">
                {!getDestinations ? (
                  <Button
                    type="submit"
                    color="blue"
                    shade="normal"
                    className="search-trips"
                    onClick={handleFormSubmit}
                    title="جستجوی ترکیب‌ها"
                  />
                ) : (
                  <StyledResultHeader className="flex-row">
                    <button
                      type="button"
                      className="search-trips ml-auto"
                    >
                      قبلی
                    </button>
                    <h3 className="text-bold text-large text-center flex-column">
                      از {fromCity.title} به {toCity.title}
                      <div className="small-text">۱ از ۳</div>
                    </h3>
                    <button
                      type="button"
                      className="search-trips mr-auto"
                    >
                      بعدی
                    </button>
                  </StyledResultHeader>
                )}
              </div>

              <StyledDestinationsList
                className={`flex-column ${
                  getDestinations ? 'd-flex' : 'd-none'
                }`}
              >
                <div>
                  <div className="city-name"> تهران</div>
                  <div className="city-description">شهر مبدا</div>
                </div>
                <div>
                  <div className="city-name">شیراز</div>
                  <div className="city-description">
                    <NavLink to={`${routes.city.path}/2`}>
                      جاهای دیدنیش کجاست؟
                    </NavLink>
                    <NavLink
                      className="bg-green-light"
                      to={`${routes.place.path}/2312`}
                    >
                      رستوران احمدیان
                    </NavLink>
                  </div>
                </div>
                <div>
                  <div className="city-name">بوشهر</div>
                  <div className="city-description">شهر مبدا</div>
                </div>
              </StyledDestinationsList>

              <div className="justify-center align-center">
                <Button
                  className={getDestinations ? 'd-flex' : 'd-none'}
                  style={{
                    minWidth: 60,
                  }}
                  onClick={handleFormSubmit}
                  size="sm"
                  title="بازگشت"
                  color="gray"
                  shade="normal"
                />
              </div>
            </div>
          </TabPanel>

          <TabPanel whenActive="train-trip">
            <div className="text-huge text-bold text-gray-normal align-center justify-center pt-4 pb-2 mt-4 mb-4">
              فعلا آماده نیست :(
            </div>
          </TabPanel>

          <TabPanel whenActive="flight-trip">
            <div className="text-huge text-bold text-gray-normal align-center justify-center pt-4 pb-2 mt-4 mb-4">
              فعلا آماده نیست :(
            </div>
          </TabPanel>
        </TabSwitcher>
      </StyledSmartTripWrapper>
    </>
  );
};

export default AroundHere;
