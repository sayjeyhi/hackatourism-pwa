import React from 'react';
import { Tab, TabPanel, TabSwitcher } from '@snappmarket/ui';

import SeoHead from 'components/Common/Seo/SeoHead';
import { StyledSmartTripWrapper } from './styles';

const AroundHere = () => (
  <>
    <SeoHead title="سفر هوشمند" />
    <StyledSmartTripWrapper className="flex-row justify-around">
      <TabSwitcher initialTab="bus-trip">
        <Tab id="bus-trip">با اتوبوس</Tab>
        <Tab id="train-trip">با قطار</Tab>
        <Tab id="flight-trip">با هواپیما</Tab>

        <TabPanel whenActive="bus-trip">
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
        </TabPanel>
        <TabPanel whenActive="train-trip">
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
        </TabPanel>
        <TabPanel whenActive="flight-trip">
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
        </TabPanel>
      </TabSwitcher>
    </StyledSmartTripWrapper>
  </>
);

export default AroundHere;
