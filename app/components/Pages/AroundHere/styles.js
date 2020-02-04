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

export const StyledCityNameWrapper = Styled.div``;
