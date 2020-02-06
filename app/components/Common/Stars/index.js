import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { StyledStars } from './styles';

const Stars = ({ chose: initialChose }) => {
  const [chose, setChose] = useState(initialChose);

  const handleChoseStar = number => {
    setChose(number);
  };

  return (
    <StyledStars>
      <span
        onClick={() => handleChoseStar(1)}
        className={`${chose === 1 ? 'chose' : ''}`}
      >
        ☆
      </span>
      <span
        onClick={() => handleChoseStar(2)}
        className={`${chose === 2 ? 'chose' : ''}`}
      >
        ☆
      </span>
      <span
        onClick={() => handleChoseStar(3)}
        className={`${chose === 3 ? 'chose' : ''}`}
      >
        ☆
      </span>
      <span
        onClick={() => handleChoseStar(4)}
        className={`${chose === 4 ? 'chose' : ''}`}
      >
        ☆
      </span>
      <span
        onClick={() => handleChoseStar(5)}
        className={`${chose === 5 ? 'chose' : ''}`}
      >
        ☆
      </span>
    </StyledStars>
  );
};

Stars.propTypes = {
  chose: PropTypes.number,
};

Stars.defaultProps = {
  chose: 4,
};

export default Stars;
