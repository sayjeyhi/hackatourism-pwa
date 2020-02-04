import Styled from 'styled-components';

export const StyledCityPageWrapper = Styled.div`
  text-align: center;
  margin-top: 20px;
  .map-container {
    flex: 0 0 90%;
    height: 300px;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    
    min-height: calc(${props => props.theme.defaultRem} * 30);
  }
`;

export const StyledCityNameWrapper = Styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.4);
  font-size: 24px;
  font-weight: bold;
  display: inline-flex;
  padding: 12px 22px;
  position: relative;
  top: -20px;
`;
