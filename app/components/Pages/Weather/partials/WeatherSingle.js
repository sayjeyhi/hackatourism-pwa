import React from 'react';
import PropTypes from 'prop-types';
import { } from 'resources/svg/'
import { StyledWeatherSingle } from '../styles';

const WeatherSingle = props => {
  return (
    <StyledWeatherSingle>
      <div className="flex-row">
        <div className="weather-icon">

        </div>
        <div className="weather-name ">
          <div>آفتابی</div>
          <div className="mr-auto">15</div>
        </div>
      </div>
      <div className="justify-around">
        <span>14</span>
        <span>16</span>
        <span>17</span>
        <span>15</span>
        <span>14</span>
      </div>
    </StyledWeatherSingle>
  );
};

WeatherSingle.propTypes = {

};

export default WeatherSingle;
