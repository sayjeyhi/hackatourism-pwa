import Styled from 'styled-components';

export const StyledNearByWrapper = Styled.div`
  margin-top: 20px;
  .map-container {
    flex: 0 0 90%;
    height: 300px;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    border: 1px solid #ccc;
    
    min-height: calc(${props => props.theme.defaultRem} * 30);
  }
`;

export const StyledChooseLocation = Styled.div`
  top: -45px;
  background: #f5f5f5;
  border-radius: 30px 30px 27px 19px;
  box-shadow: 0px 7px 13px -3px rgba(0,0,0,0.2);
  font-size: 24px;
  font-weight: bold;
  display: inline-flex;
  padding: 12px 30px 41px 30px;
  &.did-chose {
    padding: 0;
    & > div { 
    display:  none;
    }
  }
  svg {
    width: 120px;
    height: 120px;
    position: absolute;
    top: 11px;
    * {
      fill: rgba(0,0,0,0.07);
    }
  }
  button {
    background-color: #47c145;
    color: #fff;
    display: inline-block;
    padding: 7px 10px;
    border-radius: 5px;
    box-shadow: 3px 4px 10px rgba(146,144,144,0.49);
    position: relative;
    top: 18px;
    float: left;
    font-size: 14px;
  }
`;
