import React from 'react';

import { NavLink } from 'react-router-dom';

const CitiesStates = ({ neighbors, currentCity }) => (
  <StyledStateMachine>
    <div className="s_1">
      <NavLink to={`${neighbors[0].id}`}>{neighbors[0].title}</NavLink>
    </div>
    <div className="s_2 ">
      <NavLink to={`${neighbors[1].id}`}>{neighbors[1].title}</NavLink>
    </div>
    <div className="s_3 ">
      <NavLink to={`${neighbors[2].id}`}>{neighbors[2].title}</NavLink>
    </div>
    <div className="s_4 ">
      <NavLink to={`${neighbors[3].id}`}>{neighbors[3].title}</NavLink>
    </div>
    <div className="s_5 ">
      <NavLink to={`${neighbors[4].id}`}>{neighbors[4].title}</NavLink>
    </div>
    <div className="s_6 ">
      <NavLink to={`${neighbors[5].id}`}>{neighbors[5].title}</NavLink>
    </div>
    <div className="s_7 ">
      <NavLink to={`${neighbors[6].id}`}>{neighbors[6].title}</NavLink>
    </div>
    <div className="s_8 ">
      <NavLink to={`${neighbors[7].id}`}>{neighbors[7].title}</NavLink>
    </div>
    <div className="s_9 ">
      <NavLink to={`${neighbors[8].id}`}>{neighbors[8].title}</NavLink>
    </div>
  </StyledStateMachine>
);

CitiesStates.propTypes = {
  neighbors: PropTypes.object,
  currentCity: PropTypes.object,
};

export default withStateMachine(statechart)(CitiesStates);
