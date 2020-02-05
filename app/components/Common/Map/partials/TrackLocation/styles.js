import styled from 'styled-components';

export const StyledUserTrackButton = styled.button`
  background: ${props => props.theme.colors.white};
  padding: ${props => props.theme.defaultRem};
  border-radius: 50%;
  color: ${props => props.theme.colors.blue.normal};
  position: absolute;
  bottom: calc(${props => props.theme.defaultRem} * 1.5);
  right: calc(${props => props.theme.defaultRem} / 1);
  cursor: pointer;
  z-index: 1001;
  box-shadow: 0 calc(${props => props.theme.defaultRem} / 2)
    calc(${props => props.theme.defaultRem} / 2) rgba(0, 0, 0, 0.2);
  display: flex;
  border: none;
  ${props => props.disabled && `opacity: 0.5;`};
`;
