import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import routes from 'components/Common/Router/routes';
import { StyledPlace } from '../styles';

const PlaceWrapper = ({ name, id }) => (
  <StyledPlace>
    <div className="title">{name}</div>
    <NavLink to={`${routes.place.path}/${id}`} className="no-effect-button">بزن بریم!</NavLink>
  </StyledPlace>
);

PlaceWrapper.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default PlaceWrapper;
