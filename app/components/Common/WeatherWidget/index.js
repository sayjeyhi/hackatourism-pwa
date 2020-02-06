import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import routes from 'components/Common/Router/routes';
import SunnyOvercast from 'resources/svg/Weather/wi-day-sunny-overcast';

import { NavLink } from 'react-router-dom';
import { StyledWeather } from './styles';

const WeatherWidget = ({ weatherId }) => {
  useEffect(() => {
    // get weather info and set state
  });

  return (
    <StyledWeather
      as={NavLink}
      to={`${routes.weather.path}/${weatherId}`}
      className="current-weather"
    >
      <div className="weather-icon align-center justify-center">
        <SunnyOvercast />
      </div>
      <div className="weather-metric">32</div>
    </StyledWeather>
  );
};

WeatherWidget.propTypes = {
  weather_id: PropTypes.number,
};

export default WeatherWidget;
