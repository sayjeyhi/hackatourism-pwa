import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import routes from 'components/Common/Router/routes';
import WeatherWidget from 'components/Common/WeatherWidget';
import { StyledTopCity } from './styles';

const TopCity = ({ id, name, description, image, weather_id: weatherId }) => (
  <StyledTopCity as={NavLink} to={`${routes.city.path}/${id}`}>
    <img alt={name} src={image} />
    <div className="city-name">{name}</div>
    <div className="city-description">{description}</div>
    <WeatherWidget weatherId={weatherId} />
  </StyledTopCity>
);

TopCity.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  weather_id: PropTypes.number,
};

export default TopCity;
