import React from 'react';
import PropTypes from 'prop-types';

import { StyledMusicsWrapper } from './styles';

const Musics = props => (
  <StyledMusicsWrapper>
    <button className="no-effect-button">
      <img
        alt={'موزیک'}
        src={'https://avatars2.githubusercontent.com/u/6254009?s=460&v=4'}
      />
      <div>ukm</div>
    </button>
  </StyledMusicsWrapper>
);

Musics.propTypes = {};

export default Musics;
