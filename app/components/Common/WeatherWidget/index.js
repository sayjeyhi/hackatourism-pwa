import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import routes from 'components/Common/Router/routes';

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
      <div className="weather-icon align-center justify-center">.</div>
      <div className="weather-metric">0</div>
    </StyledWeather>
  );
};

WeatherWidget.propTypes = {
  weather_id: PropTypes.number,
};

export default WeatherWidget;
