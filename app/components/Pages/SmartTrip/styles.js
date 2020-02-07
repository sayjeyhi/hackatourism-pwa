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
    .chechbox-search {
      font-size: 14px;
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

export const StyledDestinationsList = Styled.div`
  position: relative;
  margin-top: 20px;
  &:after {
    content: '';
    position: absolute;
    border-right: 1px dashed #e8e8e8;
    height: calc(100% - 76px);
    right: 30px;
    top: 38px;
  }
  > div {
    position: relative;
    border-radius: 16px;
    border: 1px solid #e2e2e2;
    margin: 4px 0;
    padding-right: 41px;
    padding: 15px 55px 15px 20px;
    font-size: 22px;
    font-weight: 700;
    &:after {
      content: '';
      width: 20px;
      height: 20px;
      position: absolute;
      background: #e8e8e8;
      right: 20px;
      top: 22px;
      border-radius: 50%;
    }
    .city-name {
      span{
        display: block;
        float: left;
        background: rgba(200,200,200,0.3);
        font-size: 12px;
        padding: 4px;
        border-radius: 5px;
        color: #948c8c;
        svg {
          width: 14px;
          height: 14px;
          margin-left: 6px;
          * {
            fill: #99ff9f;
            stroke: #333;
          }
        }
      }
    }
 
    .city-description {
      font-size: 12px;
      a {
        border-radius: 8px;
        background: #e6e6e6;
        padding: 3px 12px;
        margin: 6px 4px;
        color: #444;
      }
    }
  }
  > div:first-child:after {
    background: rgb(108, 255, 121);
  }
  > div:last-child:after {
    background: rgb(108, 255, 121)
  }
`;

export const StyledResultHeader = Styled.div`
  width: 100%;
  button {
    border: none;
    width: 50px;
    height: 50px;
    font-size: 15px;
    color: #676565;
    background: transparent;
    font-weight: 300;
    cursor: pointer;
  }
  .small-text {
    font-size: 11px !important;
    
  }
`;
