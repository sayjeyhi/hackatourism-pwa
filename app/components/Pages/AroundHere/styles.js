import Styled from 'styled-components';

export const StyledNearByWrapper = Styled.div`
  margin-top: 20px;
  .map-container {
    flex: 0 0 90%;
    height: 300px;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    
    min-height: calc(${props => props.theme.defaultRem} * 30);
  }
`;

export const StyledCityNameWrapper = Styled.div``;
