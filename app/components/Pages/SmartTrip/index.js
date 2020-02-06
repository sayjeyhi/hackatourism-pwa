import React, { useState } from 'react';
import { CheckBox, Button, Tab, TabPanel, TabSwitcher } from '@snappmarket/ui';

import AirPlaneIcon from 'resources/svg/Icons/AirPlaneIcon';
import BusIcon from 'resources/svg/Icons/BusIcon';
import TrainIcon from 'resources/svg/Icons/TrainIcon';
import SeoHead from 'components/Common/Seo/SeoHead';
import {
  StyledSmartTripWrapper,
  StyledDestinationsList,
  StyledPagination,
} from './styles';

const AroundHere = () => {
  const [getDestinations, setGetDestinations] = useState(false);
  const handleFormSubmit = () => {
    setGetDestinations(!getDestinations);
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
            </div>

            <div className="flex-column">
              <div
                className={`chechbox-search seperate-bottom ${
                  !getDestinations ? 'd-flex' : 'd-none'
                }`}
              >
                <input
                  type="checkbox"
                  name="showAllPosibileThings"
                  id="showAllPosibileThings"
                />
                <label htmlFor="showAllPosibileThings">
                  {' '}
                  نمایش سفرهای نوع دیگر
                </label>
              </div>

              <Button
                type="submit"
                color={!getDestinations ? 'blue' : 'green'}
                shade="normal"
                className="search-trips"
                onClick={handleFormSubmit}
                title={!getDestinations ? 'جستجوی ترکیب‌ها' : 'بازگشت'}
              />

              <StyledDestinationsList
                className={`flex-column ${
                  getDestinations ? 'd-flex' : 'd-none'
                }`}
              >
                <div>تهران</div>
                <div>شیراز</div>
                <div>بوشهر</div>
              </StyledDestinationsList>

              <StyledPagination
                className={`justify-center align-center ${
                  getDestinations ? 'd-flex' : 'd-none'
                }`}
              >
                <button type="button" className="no-effect-button">
                  ۱
                </button>
                <button type="button" className="no-effect-button">
                  ۲
                </button>
                <button type="button" className="no-effect-button">
                  ۳
                </button>
              </StyledPagination>
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
