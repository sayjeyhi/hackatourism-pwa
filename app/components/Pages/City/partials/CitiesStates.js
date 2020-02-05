import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import routes from 'components/Common/Router/routes';
import { StyledStateMachine } from '../styles';

const CitiesStates = ({ neighbors, currentCity, className }) => (
  <StyledStateMachine className={`justify-around ${className}`}>
    <NavLink to={`${routes.city.path}/${neighbors[1].id}`} className="part-1 ">
      {neighbors[1].title}
    </NavLink>
    <NavLink to={`${routes.city.path}/${neighbors[2].id}`} className="part-1 ">
      {neighbors[2].title}
    </NavLink>
    <NavLink to={`${routes.city.path}/${neighbors[3].id}`} className="part-1 ">
      {neighbors[3].title}
    </NavLink>
    <NavLink to={`${routes.city.path}/${neighbors[4].id}`} className="part-1 ">
      {neighbors[4].title}
    </NavLink>
    <NavLink
      to={`${routes.city.path}/${currentCity.id}`}
      className="part-1 currentCity"
    >
      {currentCity.title}
    </NavLink>
    <NavLink to={`${routes.city.path}/${neighbors[6].id}`} className="part-1 ">
      {neighbors[6].title}
    </NavLink>
    <NavLink to={`${routes.city.path}/${neighbors[7].id}`} className="part-1 ">
      {neighbors[7].title}
    </NavLink>
    <NavLink to={`${routes.city.path}/${neighbors[8].id}`} className="part-1 ">
      {neighbors[8].title}
    </NavLink>
    <NavLink to={`${routes.city.path}/${neighbors[9].id}`} className="part-1 ">
      {neighbors[9].title}
    </NavLink>
  </StyledStateMachine>
);

CitiesStates.propTypes = {
  neighbors: PropTypes.object,
  currentCity: PropTypes.object,
  className: PropTypes.string,
};

export default CitiesStates;
