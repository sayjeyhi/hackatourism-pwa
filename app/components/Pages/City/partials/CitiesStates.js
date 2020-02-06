import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import routes from 'components/Common/Router/routes';
import { StyledStateMachine } from '../styles';

const CitiesStates = ({ neighbors, currentCity, className }) => {
  const conditionalyRender = (a, current) =>
    a ? (
      <NavLink to={`${routes.city.path}/${a.id}`} className={`part-1 ${current ? 'currentCity' : ''}`}>
        {a.title}
      </NavLink>
    ) : null;

  return (
    <StyledStateMachine className={`justify-around ${className}`}>
      {[
        conditionalyRender(neighbors[1]),
        conditionalyRender(neighbors[2]),
        conditionalyRender(neighbors[3]),
        conditionalyRender(neighbors[4]),
        conditionalyRender(currentCity, true),
        conditionalyRender(neighbors[6]),
        conditionalyRender(neighbors[7]),
        conditionalyRender(neighbors[8]),
        conditionalyRender(neighbors[9]),
      ]}
    </StyledStateMachine>
  );
};

CitiesStates.propTypes = {
  neighbors: PropTypes.object,
  currentCity: PropTypes.object,
  className: PropTypes.string,
};

export default CitiesStates;
