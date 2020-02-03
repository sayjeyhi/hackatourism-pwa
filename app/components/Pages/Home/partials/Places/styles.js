import Styled from 'styled-components';

export const StyledPlacesVerticalTab = Styled.div`
  > div {
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    background: #fff;
    padding: 0;
    overflow: hidden;
  }
  .places-side-panel {
    flex: 0 0 20%;
    > button {
      width: 100%;
      min-width: 100%;
      background: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      padding: 0;
      margin: 0;
      color: #ccc;
      border-radius: 0;
      border-bottom: 1px solid rgba(0,0,0,0.2);
      border-left: 1px solid rgba(0,0,0,0.2);
      &:last-child {
        border-bottom: none;
      }
      > svg {
        display: block;
        width: 90%;
      }
    }
    
  }
  .places-content-panel{
    flex: 0 0 80%;
    padding: 8px;
    > div {
      margin: 0;
    }
  }
`;
