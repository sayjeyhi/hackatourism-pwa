import Styled from 'styled-components';

export const StyledCityPageWrapper = Styled.div`
  text-align: center;
  margin-top: 20px;
  .map-container {
    flex: 0 0 90%;
    height: 300px;
    border-radius: 18px;
    overflow: hidden;
    position: relative;
    border: 1px solid #ccc;
    
    
    min-height: calc(${props => props.theme.defaultRem} * 30);
  }
`;

export const StyledCityNameWrapper = Styled.div`
  background: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0px 7px 13px -3px rgba(0, 0, 0, 0.2);
  font-size: 24px;
  font-weight: bold;
  display: inline-flex;
  padding: 12px 22px;
  position: relative;
  top: -27px;
`;
