import React from 'react';
import PropTypes from 'prop-types';

const TrainIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    className={className}
    viewBox="0 0 24 24"
  >
    <g
      className="nc-icon-wrapper"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      fill="#000000"
      stroke="#000000"
    >
      <line
        data-cap="butt"
        fill="none"
        stroke="#000000"
        strokeMiterlimit="10"
        x1="16.051"
        y1="17"
        x2="7.949"
        y2="17"
      />
      <path
        data-cap="butt"
        fill="none"
        stroke="#000000"
        strokeMiterlimit="10"
        d="M3.051,17H1V6c0-1.105,0.895-2,2-2h18 c1.105,0,2,0.895,2,2v11h-2.051"
      />
      <circle
        data-color="color-2"
        fill="none"
        strokeMiterlimit="10"
        cx="5.5"
        cy="17.5"
        r="2.5"
      />
      <circle
        data-color="color-2"
        fill="none"
        strokeMiterlimit="10"
        cx="18.5"
        cy="17.5"
        r="2.5"
      />
      <line
        data-cap="butt"
        fill="none"
        stroke="#000000"
        strokeMiterlimit="10"
        x1="1"
        y1="11"
        x2="23"
        y2="11"
      />
      <line
        data-cap="butt"
        fill="none"
        stroke="#000000"
        strokeMiterlimit="10"
        x1="17"
        y1="4"
        x2="17"
        y2="11"
      />
    </g>
  </svg>
);

TrainIcon.propTypes = {
  className: PropTypes.string,
};

export default TrainIcon;
