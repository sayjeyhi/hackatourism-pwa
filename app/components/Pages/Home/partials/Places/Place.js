import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import routes from 'components/Common/Router/routes';
import { StyledPlace } from './styles';

const Place = ({ title, id }) => (
  <NavLink to={`${routes.place.path}/${id}`}>
    <StyledPlace>{title}</StyledPlace>
  </NavLink>
);

Place.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
};

export default Place;
