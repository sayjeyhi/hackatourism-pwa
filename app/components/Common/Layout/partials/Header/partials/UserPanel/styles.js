import Styled from 'styled-components';

export const StyledUserPanelHolder = Styled.div`
  position: absolute;
  top: calc(${props => props.theme.defaultRem} * 5.5);
  left: 0;
  background: ${props => props.theme.colors.white};
  width: calc(${props => props.theme.defaultRem} * 24);
  border-radius: 0 0 calc(${props =>
    props.theme.defaultRem} * 0.5) calc(${props =>
  props.theme.defaultRem} * 0.5);
  display: ${props => (props.visible ? 'block' : 'none')};
  overflow: hidden;
  border-top: calc(${props => props.theme.defaultRem} * 0.1) solid ${props =>
  props.theme.colors.gray['ultra-light']};
`;

export const StyledPanelTop = Styled.div`
  background: ${props => props.theme.colors.gray.bright};
  padding: calc(${props => props.theme.defaultRem} * 1.2);
  font-size: calc(${props => props.theme.defaultRem} * 1.4);
  border-bottom: calc(${props => props.theme.defaultRem} * 0.1) solid ${props =>
  props.theme.colors.gray['ultra-light']};
  .increase-credit {
    min-width: 50px;
  }
`;

/* eslint-disable indent */
export const StyledPanelList = Styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  svg {
    width: calc(${props => props.theme.defaultRem} * 2);
    height: calc(${props => props.theme.defaultRem} * 2);
    margin-left: calc(${props => props.theme.defaultRem} * 1.2);
  }
  button svg{
    margin-right: calc(${props => props.theme.defaultRem} * -0.2);
  }
  li {
    a, button {
      width: calc(100% - ${props => props.theme.defaultRem} * 2.4);
      padding: calc(${props => props.theme.defaultRem} * 1.4) calc(${props =>
  props.theme.defaultRem} * 0.6);
      margin: 0 calc(${props => props.theme.defaultRem} * 1.2);
      border: none;
      border-top: calc(${props =>
        props.theme.defaultRem} * 0.1) solid ${props =>
  props.theme.colors.gray.bright};
      background: ${props => props.theme.colors.white};
      color: ${props => props.theme.colors.gray.normal};
      text-align: right;
      display: block;
      cursor: pointer;
    }
    &:hover,
    &:hover a,
    &:hover button{
      background: ${props => props.theme.colors.gray.bright};
      color: ${props => props.theme.colors.blue.light};
    }
    &:hover svg * {
      fill: ${props => props.theme.colors.blue.light} !important;
    }
  }
`;
/* eslint-enable indent */
