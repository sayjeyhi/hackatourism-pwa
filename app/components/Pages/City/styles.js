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
  
  .section-part {
    position: relative;
    align-items: center;
    justify-content: center;
  }
  .section-part::after {
    content: '';
    background: #ffffff94;
    width: 98%;
    border-radius: 20px;
    height: 100%;
    position: absolute;
    top: 20px;
    z-index: -1;
    box-shadow: 0px 6px 34px -9px rgba(175, 175, 175, 0.28);
  }
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
    background: #6ce87d;
    width: 60%;
    height: 40px;
    box-shadow: none;
    &:after {
      content: 'دمای فعلی هوا';
      position: absolute;
      right: 55px;
      color: #fff;
      font-size: 15px;
      font-weight: 900;
      top: 50%;
      transform: translate(0, -50%);
    }
    .weather-icon {
      width: 40px;
      height: 40px;
      background: #7eff8f;
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
    .weather-metric,
    .weather-metric:before {
       color: #369644;
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
    background-color: #52cc52;
    color: #fff;
    display: inline-block;
    padding: 7px 10px;
    border-radius: 5px;
    box-shadow: 3px 4px 10px rgba(82, 204, 82, 0.41);
    position: relative;
    top: 18px;
    float: left;
    font-size: 14px;
  }
`;

export const StyledReservationMenuItemNavLink = Styled.div`
  background: #effbef;
  cursor: pointer;
  border-radius: 12px;
  padding: 15px;
  text-align: center;
  width: 85%;
  margin-bottom: 12px;
  box-shadow: 0 4px 1px rgba(60, 245, 69, 0.27);
  font-size: 16px;
  color: #6b6868;
  .r-title {
    font-weight: 900;
    margin-top: 8px;
  }
  svg {
    filter: sepia(70%) grayscale(1);
    width: 85px;
  }
`;

export const StyledStateMachine = Styled.div`
  flex-wrap: wrap;
  > a {
    flex: 0 0 calc(33.333% - 20px);
    background: transparent;
    cursor: pointer;
    border-radius: 12px;
    padding: 15px;
    text-align: center;
    width: 85%;
    margin-bottom: 40px;
    font-size: 16px;
    color: #6b6868;
    position: relative;
    &.currentCity {
      transform: scale(1.05);
      padding: 16px;
      background: #68ff6e;
      font-weight: 900;
      box-shadow: 0 4px 1px rgb(92, 245, 98);
      font-size: 19px;
    }
    &:not(.currentCity):before {
      content: '';
      position: absolute;
      width: 70px;
      height: 70px;
      border: 2px solid #eaeaea;
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    &:last-child {
      margin-bottom: 20px;
    }
  }
`;
