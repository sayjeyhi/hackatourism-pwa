import Styled from 'styled-components';

export const StyledFullWidthMapWrapper = Styled.div`
  text-align: center;
  margin-top: 20px;
  .map-container {
    flex: 0 0 90%;
    height: 300px;
    border-radius: 18px;
    overflow: hidden;
    position: relative;
    box-shadow: 0px -3px 20px 0 rgba(231, 75, 60, 0.04), -1px 7px 20px -5px rgba(64, 130, 99, 0.26);
    min-height: calc(${props => props.theme.defaultRem} * 30);
  }
`;
