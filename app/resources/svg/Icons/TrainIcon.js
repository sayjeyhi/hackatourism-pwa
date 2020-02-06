import React from 'react';
import PropTypes from 'prop-types';

const TrainIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width="24"
    height="24"
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
      <line fill="none" strokeMiterlimit="10" x1="17" y1="17" x2="20" y2="23" />
      <line fill="none" strokeMiterlimit="10" x1="4" y1="23" x2="7" y2="17" />
      <line
        fill="none"
        strokeMiterlimit="10"
        x1="5.006"
        y1="21"
        x2="19"
        y2="21"
      />
      <line
        fill="none"
        stroke="#000000"
        strokeMiterlimit="10"
        x1="1"
        y1="7"
        x2="1"
        y2="10"
      />
      <line
        fill="none"
        stroke="#000000"
        strokeMiterlimit="10"
        x1="23"
        y1="7"
        x2="23"
        y2="10"
      />
      <path
        fill="none"
        stroke="#000000"
        strokeMiterlimit="10"
        d="M20,17H4V3 c0-1.105,0.895-2,2-2h12c1.105,0,2,0.895,2,2V17z"
      />
      <rect
        x="8"
        y="5"
        fill="none"
        strokeMiterlimit="10"
        width="8"
        height="4"
      />
      <circle fill="#000000" cx="8" cy="13" r="1" stroke="none" />
      <circle fill="#000000" cx="16" cy="13" r="1" stroke="none" />
    </g>
  </svg>
);

TrainIcon.propTypes = {
  className: PropTypes.string,
};

export default TrainIcon;
