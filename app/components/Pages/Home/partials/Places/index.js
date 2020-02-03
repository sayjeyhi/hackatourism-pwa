import React from 'react';
import PropTypes from 'prop-types';
import { TabSwitcher, Tab, TabPanel } from '@snappmarket/ui';
import {
  HospitalIcon,
  SupermarketIcon,
  ParkIcon,
  TreeIcon,
} from 'resources/svg/CityIcons';

import { StyledPlacesVerticalTab } from './styles';

const Musics = props => (
  <StyledPlacesVerticalTab>
    <TabSwitcher initialTab="foods">
      <div className="places-side-panel">
        <Tab id="foods">
          <ParkIcon />
          غذایی
        </Tab>
        <Tab id="shopping-center">
          <SupermarketIcon />
          مرکز خرید
        </Tab>
        <Tab id="medical">
          <HospitalIcon />
          مراکز درمانی
        </Tab>
        <Tab id="entertainment">
          <TreeIcon />
          تفریحات
        </Tab>
      </div>
      <div className="places-content-panel">
        <TabPanel whenActive="foods"></TabPanel>
        <TabPanel whenActive="shopping-center">مرکز خرید</TabPanel>
        <TabPanel whenActive="medical">مراکز درمانی</TabPanel>
        <TabPanel whenActive="entertainment">تفریحات</TabPanel>
      </div>
    </TabSwitcher>
  </StyledPlacesVerticalTab>
);

Musics.propTypes = {};

export default Musics;
