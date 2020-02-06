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
      <path
        data-cap="butt"
        data-color="color-2"
        fill="none"
        strokeMiterlimit="10"
        d="M13.6,6.157L6.479,1.41 C5.686,0.881,4.63,0.986,3.955,1.66L1.579,4.036l8.485,5.657"
      />
      <path
        data-cap="butt"
        data-color="color-2"
        fill="none"
        strokeMiterlimit="10"
        d="M17.843,10.4l4.747,7.121 c0.529,0.793,0.424,1.849-0.25,2.524l-2.376,2.376l-5.657-8.485"
      />
      <path
        fill="#000000"
        d="M5.401,15.341l-4.322-0.338c-0.926-0.071-1.44,1.048-0.784,1.704L2.9,19.293 L5.401,15.341z"
        stroke="none"
      />
      <path
        fill="#000000"
        d="M8.659,18.599l0.338,4.322c0.071,0.926-1.048,1.44-1.704,0.784L4.707,21.1L8.659,18.599z "
        stroke="none"
      />
      <path
        fill="none"
        stroke="#000000"
        strokeMiterlimit="10"
        d="M11.343,16.899 l-7.822,4.952c-0.893,0.536-1.908-0.479-1.372-1.372l4.952-7.822l9.778-9.778c1.172-1.172,3.071-1.172,4.243,0l0,0 c1.172,1.172,1.172,3.071,0,4.243L11.343,16.899z"
      />
    </g>
  </svg>
);

TrainIcon.propTypes = {
  className: PropTypes.string,
};

export default TrainIcon;
