import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { StyledStars } from './styles';

const Stars = ({ rate: initialChose }) => {
  const [chose, setChose] = useState(initialChose);

  console.log({
    chose,
    initialChose
  })
  const handleChoseStar = number => {
    setChose(number);
  };

  return (
    <StyledStars>
      <span
        onClick={() => handleChoseStar(5)}
        className={`${chose === 5 ? 'chose' : ''}`}
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
        onClick={() => handleChoseStar(3)}
        className={`${chose === 3 ? 'chose' : ''}`}
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
        onClick={() => handleChoseStar(1)}
        className={`${chose === 1 ? 'chose' : ''}`}
      >
        ☆
      </span>
    </StyledStars>
  );
};

Stars.propTypes = {
  rate: PropTypes.number,
};

Stars.defaultProps = {
  rate: 4,
};

export default Stars;
