import React from 'react';
import PropTypes from 'prop-types';

const LogoutIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width="16"
    height="12.153"
    viewBox="0 0 16 12.153"
  >
    <g>
      <path
        d="M0 60.977v8.1A2.031 2.031 0 0 0 2.027 71.1h6.546a2.031 2.031 0 0 0 2.027-2.024v-1.312a.4.4 0 1 0-.8 0v1.312A1.23 1.23 0 0 1 8.569 70.3H2.027A1.23 1.23 0 0 1 .8 69.076v-8.1a1.23 1.23 0 0 1 1.227-1.226h6.546A1.23 1.23 0 0 1 9.8 60.977v1.312a.4.4 0 0 0 .8 0v-1.312a2.031 2.031 0 0 0-2.024-2.027H2.027A2.028 2.028 0 0 0 0 60.977z"
        fill="#757575"
        data-name="Path 315"
        transform="translate(0 -58.95)"
      />
      <path
        d="M212.145 155.108a.4.4 0 0 0 .568 0l2.738-2.738a.4.4 0 0 0 0-.565l-2.738-2.738a.4.4 0 0 0-.565.565l2.056 2.056h-7.5a.4.4 0 0 0 0 .8h7.5l-2.056 2.056a.394.394 0 0 0-.003.564z"
        fill="#757575"
        data-name="Path 316"
        transform="translate(-199.568 -146.013)"
      />
    </g>
  </svg>
);

LogoutIcon.propTypes = {
  className: PropTypes.string,
};

export default LogoutIcon;
