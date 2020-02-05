import Styled from 'styled-components';
import { Container } from '@snappmarket/ui';

export const StyledCityPageWrapper = Styled.div``;

export const StyledCityNameWrapper = Styled.div`
  background: #f5f5f5;
  border-radius: 30px 30px 10px 10px;
  box-shadow: 0px 7px 13px -3px rgba(0,0,0,0.2);
  font-size: 24px;
  font-weight: bold;
  display: inline-flex;
  padding: 12px 30px 12px 30px;
  position: relative;
  top: -37px;
`;

export const StyledDistancesContainer = Styled(Container)`
  text-align: right;
  
  svg {
    width: 50px;
    height: 50px;
  }
  h3 {
    font-size: 18px;
    font-weight: 900;
    color: #4c4b4b;
    position: relative;
    top: 2px;
    svg {
      margin-left: 12px;
    }
  }
  .distances {
    list-style-type: none;
    margin: 0;
    padding: 0;
    li {
      margin: 0;
      padding: 6px 19px 6px 24px;
      font-size: 14px;
      
      div {
        float: left;
        color: #45a235;
      }
      
      div:after {
        content: 'ک.م';
        color: #9a9a9a;
        font-size: 11px;
        margin-right: 9px;
      }
    }
  }
  .current-weather {
    margin: 18px 10%;
    position: relative;
    display: block;
    background: #675e94;
    width: 60%;
    height: 40px;
    &:after {
      content: 'دمای فعلی هوا';
      position: absolute;
      right: 55px;
      color: rgba(185, 255, 133, 0.8117647058823529);
      font-size: 15px;
      font-weight: 900;
      top: 50%;
      transform: translate(0, -50%);
    }
    .weather-icon {
      width: 40px;
      height: 40px;
      border: 1px solid #675e94;
    }
    .weather-metric {
      font-size: 13px;
      position: relative;
      top: 50%;
      left: 21px;
      color: #d2bcfb;
      text-align: left;
      display: inline-flex;
      float: left;
      transform: translate(0, -50%);
    }
  }
`;

export const StyledPlace = Styled.div`
  flex: 0 0 22%;
  border-radius: 35% 65% 26% 74% / 64% 36% 64% 36%;
  background: #e8e8e8;
  padding: 25px 24px;
  font-size: 17px;
  font-weight: 900;
  color: rgba(0,0,0,0.7);
  a {
    background-color: #929090;
    color: #fff;
    display: inline-block;
    padding: 7px 10px;
    border-radius: 5px;
    box-shadow: 3px 4px 10px rgba(146, 144, 144, 0.49);
    position: relative;
    top: 18px;
    float: left;
    font-size: 14px;
  }
`;

export const StyledReservationMenuItem = Styled.div`
  background: #fff;
  cursor: pointer;
  border-radius: 39% 52% 61% 28% / 30% 51% 29% 40%;
  padding: 17px;
  text-align: center;
  .r-title {
    font-size: 13px;
    font-weight: 900;
    margin-top: 8px;
    color: #495a47;
  }
  svg {
    filter: sepia(70%) grayscale(1);
    width: 85px;
  }
`;
