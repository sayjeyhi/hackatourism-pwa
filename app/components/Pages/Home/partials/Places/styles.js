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
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.08), 0 7px 10px -5px rgba(255, 255, 255, 0.28);
    > div {
      margin: 0;
    }
  }
`;
