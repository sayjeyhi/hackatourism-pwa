import Styled from 'styled-components';

export const StyledWeather = Styled.div`
  transition: all ease-in-out 0.3s;
  background: #2d2d2d;
  height: auto;
  width: 32%;
  border-radius: 24px;
  box-shadow: -2px -6px 20px -3px rgba(0, 0, 0, 0.27), 0 7px 10px -4px rgba(0,172,193,.4);
  .weather-icon {
    background: #efefef;
    color: #efefef;
    border-radius: 50%;
    width: 29px;
    height: 29px;
    display: inline-flex;
    transform: scale(1.2);
    svg * {
      fill: #fff;
    }
  }
  .weather-metric {
    font-size: 13px;
    position: relative;
    top: 7px;
    left: 10px;
    color: #d2bcfb;
    text-align: left;
    display: inline-flex;
    float: left;

    &:before {
      content: 'C°';
      font-size: 9px;
      position: absolute;
      color: #ccc;
      right: -16px;
      white-space: nowrap;
    }
  }
`;
