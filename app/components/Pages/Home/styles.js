import Styled from 'styled-components';
import { Container, Col } from '@snappmarket/ui';

export const StyledHomeItemsColumn = Styled(Col)`
  font-size: 14px;
  justify-content: flex-end;
  a {
    width: calc(100% - 7px);
    background: #fff;
    border-radius: 15px;
    padding: 20px 5px;
    margin-bottom: 14px;
    box-shadow: 0 3px 1px rgba(0,0,0,0.06);
  }
  &.half-section {
    margin-bottom: 20px;
    justify-content: flex-end;
    &.aa a {
      background: linear-gradient(60deg, #66bb6a, #43a047);
      box-shadow: 0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(76, 175, 80,.4);
      * {
        fill: #66bb6a;
      }
    }
    &.bb a {
      background: linear-gradient(60deg, #26c6da, #00acc1);
      box-shadow: 0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(0, 172, 193,.4); 
      * {
        fill: #26c6da;
      }
    }
    a {
      width: calc(100% - 14px);
      flex-direction: row !important;
      .section-title {
        flex: 0 0 70%;
        color: #fff !important;
      }
    }
    .section-icon {
      background: #fff;
      position: relative;
      left: 10px;
      right: -20px;
      box-shadow: 0 2.8px 2.2px rgba(241,39,17,0.034), 0 6.7px 5.3px rgba(241,39,17,0.048), 0 12.5px 10px rgba(241,39,17,0.06), 0 22.3px 17.9px rgba(241,39,17,0.072);
    } 
  }
  
  svg {
    display: block;
    width: 100%;
    height: 50px;
    * {
      fill: rgba(0,0,0,0.3);
    }
  }
  
  .section-icon {
    border-radius: 10px;
    padding: 10px 0;
    &.cc {
      background: #FFB75E;  /* fallback for old browsers */
      background: -webkit-linear-gradient(to right, #ED8F03, #FFB75E);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #ED8F03, #FFB75E); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
    &.dd {
      background: #673AB7;  /* fallback for old browsers */
      background: -webkit-linear-gradient(to right, #512DA8, #673AB7);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #512DA8, #673AB7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
    &.ff {
      background: #f46b45;  /* fallback for old browsers */
      background: -webkit-linear-gradient(to right, #eea849, #f46b45);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #eea849, #f46b45); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
    &.ee {
      background: #ffb347;  /* fallback for old browsers */
      background: -webkit-linear-gradient(to right, #ffcc33, #ffb347);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #ffcc33, #ffb347); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
  
  }
  .section-title {
    font-weight: 500;
    color: #666;
    margin-top: 5px;
    font-weight: 900;
    font-size: 18px;
  }
  
  .section-description {
    font-size: 12px;
    color: rgba(255,255,255,0.7);
    margin-top: 5px;
  }
`;

export const StyledInlineServices = Styled(Container)`
  > div {
    display: flex;
    justify-content: space-between;
    background: #fff;
    width: 100%;
    border-radius: 10px;
    margin: 16px 0;
    padding: 13px 13px 20px 13px;
    box-shadow: 0 3px 1px rgba(0,0,0,0.06);
  }
  a {
    color: #fff;
    padding: 10px;
    position: relative;
    font-size: 15px;
    border-radius: 5px;
    padding-bottom: 17px;
    flex: 0 0 15%;
    text-align: center;
    font-weight: 900;
    overflow: hidden;
    position: relative;
    
    &:nth-child(1) {
      background: linear-gradient(60deg, #ffa726, #fb8c00);
      box-shadow: 0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(255, 152, 0,.4);
    }
    &:nth-child(2) {
      background: linear-gradient(60deg, #ef5350, #e53935);
      box-shadow: 0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(244, 67, 54,.4);
    }
    &:nth-child(3) {
      background: linear-gradient(60deg, #26c6da, #00acc1);
      box-shadow: 0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(0, 172, 193,.4);
    }
    &:nth-child(4) {
      background: linear-gradient(60deg, #ffa726, #fb8c00);
      box-shadow: 0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(255, 152, 0,.4);
    }
    &:nth-child(5) {
      background: linear-gradient(60deg, #ef5350, #e53935);
      box-shadow: 0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(244, 67, 54,.4);
    }
    &:hover {
      svg {
        transform: translate(0, 5px);
      }
      &:before {
        transform: translate(3px, -5px);
      }
      &:after {
        transform: translate(-3px, -5px);
      }
    }
    svg {
      transition: transform ease-in-out 0.3s;
      position: absolute;
      bottom: 0;
      width: 100%;
      height: auto;
      * {
        fill: rgba(0, 0, 0, 0.24)
      }
    }
    &:before{
      transition: transform ease-in-out 0.3s;
      content: '';
      background: rgba(0, 0, 0, 0.22);
      position: absolute;
      top: -7px;
      height: 14px;
      border-radius: 50%;
      width: 14px;
      right: 2px;
    }
    &:after {
      transition: transform ease-in-out 0.3s;
      content: '';
      background: rgba(0, 0, 0, 0.07);
      position: absolute;
      top: -11px;
      border-radius: 50%;
      width: 26px;
      left: -9px;
      height: 27px;
    }
  }
`;

export const StyledHomeSection = Styled(Container)`
  font-weight: 900;
  color: #484848;
  width: 100%;
  font-size: 12px;
  margin-top: 10px;
  > .title-holder {
    display: flex;
    &:not(.no-border) {
      border-bottom: 1px solid rgba(47,47,47,0.09);
    }
  }
  h2 {
    position: relative;
    &:before {
      content: ' ';
      width: 112%;
      position: absolute;
      bottom: -12px;
      height: 4px;
      border-radius: 20px;
      background: #f12711;
      background: -webkit-linear-gradient(to right, #f5af19, #f12711);
      background: linear-gradient(45deg, #f5af19, #f12711);
    }
  }
`;

export const StyledTicketLikeCard = Styled.div`
  flex: 0 0 20%;
  position: relative;
  &:after{
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 8px;
    box-shadow: 4px 0 80px -30px #000;
    border-radius: 10px;
  }
  .ticket-container{
    position: relative;
    overflow: hidden;
  }
  .ticket{
    width: 237px;
    height: 60px;
    background: #fff;
    border: 3px solid #e8ebf0;
    border-right: 0;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  .corner, .corners{
    width: 18px;
    position: absolute;
    top: 0;
    bottom: 0;
  }
  .corner{
    height: 26px;
    right: -8px;
    margin: auto;
    z-index: 2;
    border: 3px solid #e8ebf0;
    border-radius: 7px;
    box-sizing: border-box;
  }
  .corners{
    right: -11px;
    z-index: 1;
    &:before, &:after{
      content: '';
      display: block;
      width: 10px;
      height: 23px;
      position: absolute;
      left: -3px;
      background: #fff;
      box-sizing: border-box;
    }
    &:before{
      top: 0;
      border-top: 3px solid #e8ebf0;
      border-right: 3px solid #e8ebf0;
      border-top-right-radius: 10px;
    }
    &:after{
      bottom: 0;
      border-bottom: 3px solid #e8ebf0;
      border-right: 3px solid #e8ebf0;
      border-bottom-right-radius: 10px;
    }
  }
`;
