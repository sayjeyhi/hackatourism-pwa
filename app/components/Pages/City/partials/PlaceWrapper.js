import React from 'react';
import PropTypes from 'prop-types';
import { StyledPlace } from '../styles';

const PlaceWrapper = props => {
  return (
    <StyledPlace>
      <div className={'title'}>رستوران احمدی</div>
      <button className="no-effect-button">بزن بریم!</button>
    </StyledPlace>
  );
};

PlaceWrapper.propTypes = {};

export default PlaceWrapper;
