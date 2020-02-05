import Styled from 'styled-components';

export const StyledFormContainer = Styled.div`
  h3 {
    font-size: calc(${props => props.theme.defaultRem} * 1.4);
    font-weight: normal;
    margin: 8px 0 0 0;
  }
`;

export const StyledMapContainer = Styled.div`
  flex-grow: 3;
  overflow: hidden;
  position: relative;
  height: 100%;
  min-height: calc(${props => props.theme.defaultRem} * 30);
`;
