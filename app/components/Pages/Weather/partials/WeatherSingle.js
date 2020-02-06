import React from 'react';
import Cloudy from 'resources/svg/Weather/wi-day-cloudy-gusts';
import { StyledWeatherSingle } from '../styles';

const WeatherSingle = () => {
  return (
    <StyledWeatherSingle>
      <div className="flex-row justify-content align-center">
        <div className="weather-icon">
          <Cloudy />
        </div>
        <div className="weather-name flex-row">
          <div className="mr-2 text-green-normal">آفتابی</div>
          <div className="weather-metrics ml-1 mr-auto">15</div>
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

export default WeatherSingle;
