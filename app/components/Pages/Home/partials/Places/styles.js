import Styled from 'styled-components';

export const StyledPlacesVerticalTab = Styled.div`
  margin-top: 14px;
  > div {
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    background: #fff;
    padding: 0;
    overflow: hidden;
    box-shadow: 0 4px 20px 0 rgba(79, 151, 77, 0.08), -1px 12px 20px -5px rgba(239, 86, 74, 0.04);
    position: relative;
  }
  .places-side-panel {
    flex: 0 0 20%;
    > button {
      width: 100%;
      min-width: 100%;
      height: 96px;
      background: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      padding: 0;
      margin: 0;
      color: #5d5b5b;
      flex-direction: column;
      border-radius: 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);
      border-left: 1px solid rgba(0, 0, 0, 0.08);
      font-weight: 900;
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
  .places-content-panel{
    flex: 0 0 80%;
    padding: 8px;
    max-height: 70vh;
    overflow: auto;
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.08), 0 7px 10px -5px rgba(255, 255, 255, 0.28);
    > div {
      margin: 0;
    }
  }
`;


export const StyledPlace = Styled.div`
  color: #536e52;
  border: 1px solid #ededed;
  border-radius: 7px;
  padding: 13px 12px;
  margin-bottom: 10px;
  position: relative;
  transition: all ease-in-out 0.3s;
  &:before {
    display: none;
    border-style: solid;
    border-width: 0.25em 0.25em 0 0;
    content: '';
    height: 13px;
    position: absolute;
    transform: rotate(-45deg);
    vertical-align: top;
    width: 13px;
    left: 10px;
    top: 50%;
    transform: translate(0,-50%) rotate(-135deg);
    border-color: #46dd2c;
  }
  &:hover {
    color: #46dd2c;
    border: 1px solid #a0fe62;
    &:before {
      display: block;
    }
  }
`;
