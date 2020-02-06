import Styled from 'styled-components';

export const StyledSmartTripWrapper = Styled.div`
  content: '';
  background: #ffffff94;
  width: 98%;
  border-radius: 20px;
  position: absolute;
  top: 20px;
  z-index: -1;
  box-shadow: 0px 6px 34px -9px rgba(175,175,175,0.28);
  > div {
    padding-top: 50px;
    flex: 0 0 calc(50% - 40px);
    position: relative;
    label {
      font-size: 20px;
      font-weight: 900;
    }
    > button {
      min-width: 33%;
      height: 96px;
      background: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      padding: 0;
      margin: 0;
      color: #5d5b5b;
      flex-direction: row;
      border-radius: 0;
      border: 1px solid rgba(0,0,0,0.08);
      font-weight: 900;
      display: inline;
      &.active {
        background: #f1f8dc;
      }
      &:last-child {
        border-bottom: none;
      }
      &:focus, &:visited, &:checked, &:active {
        box-shadow: 0px 6px 15px -3px rgb(191, 202, 157);
      }
      > svg {
        width: 50px;
        flex: 0 0 100%;
        overflow: hidden;
        max-height: 50px;
      }
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
