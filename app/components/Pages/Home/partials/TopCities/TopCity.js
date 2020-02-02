import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import routes from 'components/Common/Router/routes';
import { StyledTopCity } from './styles';

const TopCity = ({ id, name, description, image, weather_id }) => (
  <StyledTopCity as={NavLink} to={`${routes.city.path}/${id}`}>
    <img alt={name} src={image} />
    <div className="city-name">{name}</div>
    <div className="city-description">{description}</div>
    <NavLink
      to={`${routes.weather.index}/${weather_id}`}
      className="current-weather"
    >
      <div className="weather-icon align-center justify-center">.</div>
      <div className="weather-metric">0</div>
    </NavLink>
  </StyledTopCity>
);

TopCity.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  weather_id: PropTypes.string,
};

export default TopCity;
