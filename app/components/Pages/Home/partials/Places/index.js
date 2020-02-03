import React from 'react';
import { TabSwitcher, Tab, TabPanel } from '@snappmarket/ui';
import {
  HospitalIcon,
  SupermarketIcon,
  CoffeeShopIcon,
  TreeIcon,
} from 'resources/svg/CityIcons';
import Place from './Place';

import { StyledPlacesVerticalTab } from './styles';

const Places = () => {
  const foodPlaces = [
    {
      title: 'رستوران عظیمی',
      id: 223,
    },
    {
      title: 'غذاخوری فتحی',
      id: 223,
    },
    {
      title: 'پیتزا امیریان',
      id: 223,
    },
    {
      title: 'پیتزا کاکتوس',
      id: 223,
    },
    {
      title: 'پیتزا لاله',
      id: 223,
    },
    {
      title: 'فست فود بوف',
      id: 223,
    },
    {
      title: 'آش دوغ علی',
      id: 223,
    },
  ];

  const shoppingPlaces = [
    {
      title: 'مرکز خرید فتحی',
      id: 223,
    },
    {
      title: 'مرکز خرید رسولی',
      id: 223,
    },
    {
      title: 'مجتمع رز سفید',
      id: 223,
    },
    {
      title: 'پاساژ ولی‌عصر',
      id: 223,
    },
  ];

  const medicalPlaces = [
    {
      title: 'بیمارستان فتح',
      id: 223,
    },
    {
      title: 'کلینیک المهدی',
      id: 223,
    },
    {
      title: 'بیمارستان میلاد',
      id: 223,
    },
    {
      title: 'چشم‌پزشکی امیریان',
      id: 223,
    },
  ];

  const entertainments = [
    {
      title: 'بولینک عبدو',
      id: 223,
    },
    {
      title: 'استخر چمران',
      id: 223,
    },
    {
      title: 'پینت بال رضایی',
      id: 223,
    },
    {
      title: 'توسعه دهنده جاواسکریپت',
      id: 223,
    },
  ];

  return (
    <StyledPlacesVerticalTab>
      <TabSwitcher initialTab="foods">
        <div className="places-side-panel">
          <Tab id="foods">
            <CoffeeShopIcon />
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
          <TabPanel whenActive="foods">
            {foodPlaces.map(place => (
              <Place title={place.title} id={place.id} />
            ))}
          </TabPanel>
          <TabPanel whenActive="shopping-center">
            {shoppingPlaces.map(place => (
              <Place title={place.title} id={place.id} />
            ))}
          </TabPanel>
          <TabPanel whenActive="medical">
            {medicalPlaces.map(place => (
              <Place title={place.title} id={place.id} />
            ))}
          </TabPanel>
          <TabPanel whenActive="entertainment">
            {entertainments.map(place => (
              <Place title={place.title} id={place.id} />
            ))}
          </TabPanel>
        </div>
      </TabSwitcher>
    </StyledPlacesVerticalTab>
  );
};

export default Places;
