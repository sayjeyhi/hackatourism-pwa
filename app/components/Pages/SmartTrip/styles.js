import Styled from 'styled-components';

export const StyledSmartTripWrapper = Styled.div`
  background: #ffffff94;
  width: 98%;
  border-radius: 20px;
  box-shadow: 0px 6px 34px -9px rgba(175,175,175,0.28);
  > div {
    width: 100%;
    padding-top: 16px;
    position: relative;
    label {
      font-size: 20px;
      font-weight: 900;
    }
    .from-city,
    .to-city {
      flex: 0 0 calc(50% - 40px);
    }
    > button {
      min-width: 33.333333%;
      height: 96px;
      background: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      padding: 0;
      margin: 0;
      color: #5d5b5b !important;
      flex-direction: row;
      border-radius: 0;
      border: 1px solid rgba(0,0,0,0.08);
      font-weight: 900;
      font-size: 15px;
      display: inline;
      &.active {
        background: #e9f5c7;
        font-size: 18px;
        z-index: 0;
        svg * {
          fill: rgba(255, 255, 255, 0.18);
          stroke: #a4e49f;
        }
      }
      &:nth-child(3) {
        border-top-left-radius: 20px !important;
        border-bottom-left-radius: 20px !important;;
      } 
      &:first-child {
        border-top-right-radius: 20px !important;;
        border-bottom-right-radius: 20px !important;;
      }
      &:hover {
        z-index: 0;
        background: #f1f8dc;
        svg * {
          fill: rgba(255, 255, 255, 0.18);
          stroke: #a4e49f;
        }
      }
      &:focus, &:visited, &:checked, &:active {
        background: #f1f8dc;
        box-shadow: 0px 6px 15px -3px rgb(191, 202, 157);
      }
      > svg {
        flex: 0 0 100%;
        overflow: hidden;
        max-height: 50px;
        position: absolute;
        fill: #ccc !important;
        width: 100%;
        height: 200px;
        right: 0;
        top: 24px;
        z-index: -1;
        * {
          fill: #fefefe;
          stroke: #9ed899;
        }
      }
    }
    .seperate-bottom {
      border-top: 1px dashed rgba(0,0,0,0.07);
      padding-top: 15px;
      margin-top: 15px;
    }
  }
  
  
  select {
    background: #fff;
    border-radius: 20px;
    padding: 8px;
    height: 42px;
    border: 1px solid #d8d8d8 !important;
    width: 100%;
  }
`;
