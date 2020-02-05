import Styled from 'styled-components';

export const StyledMapWrapper = Styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  min-height: calc(${props => props.theme.defaultRem} * 2.3);
  direction: ltr;
  border-radius: calc(${props => props.theme.defaultRem} * 0.5);
  overflow: hidden;
  .mapboxgl-ctrl {
    position: absolute;
    left: ${props => props.theme.defaultRem};
    bottom: ${props => props.theme.defaultRem};
  }
  
  .mapboxgl-marker {
    left: 50% !important;
    cursor: pointer;
    top: calc(50% - ${props => props.theme.defaultRem} * 2) !important;
    cursor: auto;
    transform: translate(-50%, -50%) !important;
    svg {
      width: calc(${props => props.theme.defaultRem} * 5); !important;
      height: calc(${props => props.theme.defaultRem} * 5); !important;
    }
  }
`;
