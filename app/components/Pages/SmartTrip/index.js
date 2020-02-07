import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { CheckBox, Button, Tab, TabPanel, TabSwitcher } from '@snappmarket/ui';
import { connect } from 'react-redux';

import { cityNames } from 'resources/data/distance_cities';
import AirPlaneIcon from 'resources/svg/Icons/AirPlaneIcon';
import BusIcon from 'resources/svg/Icons/BusIcon';
import TrainIcon from 'resources/svg/Icons/TrainIcon';
import SeoHead from 'components/Common/Seo/SeoHead';
import routes from 'components/Common/Router/routes';
import iran_airports from 'resources/data/iran_airports';
import CityGraph from 'components/Pages/SmartTrip/partials/CityGraph';
import { aiActions, aiSelectors } from 'ducks/index';
import {
  StyledSmartTripWrapper,
  StyledDestinationsList,
  StyledResultHeader,
} from './styles';

const SmartTrip = ({ getCitiesPath, getAirlinesPath }) => {
  const [fromCity, setFromCity] = useState({});
  const [toCity, setToCity] = useState({});
  const [fromAirport, setFromAirport] = useState({});
  const [toAirport, setToAirport] = useState({});
  const [getDestinations, setGetDestinations] = useState(false);
  const handleFormSubmit = () => {
    if (Object.keys(fromCity).length > 0 && Object.keys(toCity).length > 0) {
      getCitiesPath({
        from: fromCity.id,
        to: toCity.id,
      });
      setGetDestinations(!getDestinations);
    } else {
      alert('ابتدا مبدا و مقصد را انتخاب کنید');
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

  const handleChangeFromAirport = e => {
    const index = e.nativeEvent.target.selectedIndex;
    const selectedText = e.nativeEvent.target[index].text;
    setFromAirport({ id: e.target.value, title: selectedText });
  };

  const handleChangeToAirport = e => {
    const index = e.nativeEvent.target.selectedIndex;
    const selectedText = e.nativeEvent.target[index].text;
    setToAirport({ id: e.target.value, title: selectedText });
  };

  const handleFormSubmitAirport = () => {
    if (
      Object.keys(fromAirport).length > 0 &&
      Object.keys(toAirport).length > 0
    ) {
      getAirlinesPath({
        from: fromAirport.id,
        to: toAirport.id,
      });
      setGetDestinations(!getDestinations);
    } else {
      alert('ابتدا مبدا و مقصد را انتخاب کنید');
    }
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
              <Tab id="flight-trip">
                <AirPlaneIcon />
                با هواپیما
              </Tab>
              <Tab id="train-trip">
                <TrainIcon />
                با قطار
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
                  <option key="-" value="-">
                    انتخاب کنید
                  </option>
                  {Object.keys(cityNames).map(cityId => (
                    <option key={`from_${cityId}`} value={cityId}>
                      {cityNames[cityId]}
                    </option>
                  ))}
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
                  {Object.keys(cityNames).map(cityId => (
                    <option value={cityId}>{cityNames[cityId]}</option>
                  ))}
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
                    <button type="button" className="search-trips ml-auto">
                      قبلی
                    </button>
                    <h3 className="text-bold text-large text-center flex-column">
                      از {fromCity.title} به {toCity.title}
                      <div className="small-text">۱ از ۳</div>
                    </h3>
                    <button type="button" className="search-trips mr-auto">
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
                <CityGraph isStart cityName="تهران" transferType={3} />
                <CityGraph cityName="شیراز" transferType={3} />
                <CityGraph isEnd cityName="بوشهر" transferType={3} />
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

          <TabPanel whenActive="flight-trip">
            <div
              className={`flex-row justify-between mt-g mb-5 ${
                !getDestinations ? 'd-flex' : 'd-none'
              }`}
            >
              <div className="from-city">
                <label htmlFor="choose-from-airport">از فرودگاه :</label>
                <select
                  onChange={handleChangeFromAirport}
                  name="choose-from-airport"
                  id="choose-from-airport"
                >
                  <option key="-" value="-">
                    انتخاب کنید
                  </option>
                  {Object.keys(iran_airports).map(airport => {
                    const airPortData = iran_airports[airport];
                    return (
                      <option key={`from_${airport}`} value={airport.Iata}>
                        {airPortData.city_persian}{' '}
                        {airPortData.airportname_persian}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="to-city">
                <label htmlFor="choose-to-airport">به فرودگاه :</label>
                <select
                  onChange={handleChangeToAirport}
                  name="choose-to-airport"
                  id="choose-to-airport"
                >
                  <option value="-">انتخاب کنید</option>
                  {Object.keys(iran_airports).map(airport => {
                    const airPortData = iran_airports[airport];
                    return (
                      <option key={`from_${airport}`} value={airport.Iata}>
                        {airPortData.city_persian}{' '}
                        {airPortData.airportname_persian}
                      </option>
                    );
                  })}
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
                    onClick={handleFormSubmitAirport}
                    title="جستجوی ترکیب‌ها"
                  />
                ) : (
                  <StyledResultHeader className="flex-row">
                    <button type="button" className="search-trips ml-auto">
                      قبلی
                    </button>
                    <h3 className="text-bold text-large text-center flex-column">
                      <div className=""> از {fromAirport.title}</div>
                      <div className=""> به {fromAirport.title}</div>
                      <div className="small-text">۱ از ۳</div>
                    </h3>
                    <button type="button" className="search-trips mr-auto">
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
                <CityGraph isStart cityName="تهران" transferType={3} />
                <CityGraph cityName="کاشان" transferType={3} />
                <CityGraph cityName="اصفهان" transferType={1} />
                <CityGraph cityName="شیراز" transferType={2} />
                <CityGraph isEnd cityName="بوشهر" transferType={3} />
              </StyledDestinationsList>

              <div className="justify-center align-center">
                <Button
                  className={getDestinations ? 'd-flex' : 'd-none'}
                  style={{
                    minWidth: 60,
                  }}
                  onClick={handleFormSubmitAirport}
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
        </TabSwitcher>
      </StyledSmartTripWrapper>
    </>
  );
};

SmartTrip.propTypes = {
  getCitiesPath: PropTypes.func,
  getAirlinesPath: PropTypes.func,
};

const mapStateToProps = state => ({
  flightsPath: aiSelectors.getFlightsPath(state),
  cityPaths: aiSelectors.getCitiesPath(state),
});

export default connect(mapStateToProps, {
  getCitiesPath: aiActions.getCitiesPath,
  getAirlinesPath: aiActions.getAirlinesPath,
})(SmartTrip);
