import Styled from 'styled-components';
import { Container } from '@snappmarket/ui';

/* eslint-disable indent */
export const StyledAddressList = Styled.div`
  .address-list-wrapper {
    overflow-y: auto;
    max-height: calc(${props => props.theme.defaultRem} * 17);
  }
  > div > .flex-row {
    border-bottom: calc(${props =>
      props.theme.defaultRem} * 0.1) solid ${props =>
  props.theme.colors.gray.bright};
    padding: ${props =>
      `calc(${props.theme.defaultRem} * 0.8) 0 calc(${props.theme.defaultRem} * 0.8) calc(${props.theme.defaultRem} * 0.8)`};
  }
`;
/* eslint-enable indent */

export const StyledAddressHolder = Styled.div`
  font-size: calc(${props => props.theme.defaultRem} * 1.3);
  strong {
    margin-left: calc(${props => props.theme.defaultRem} * 0.5);
  }
  > button {
    margin-left: calc(${props => props.theme.defaultRem} * 0.8);
  }
`;

export const StyledAddressHolderButtons = Styled.div`
  margin-right: auto;
  button {
    padding: 0;
    height: auto;
    &:hover {
      background: ${props => props.theme.colors.gray.bright};
      svg {
        fill: ${props => props.theme.colors.gray.dark} !important;
      }
    }
  }
  svg {
    height: calc(${props => props.theme.defaultRem} * 1.6);
    width: calc(${props => props.theme.defaultRem} * 1.6);
    fill: ${props => props.theme.colors.gray.normal} !important;
    margin: calc(${props => props.theme.defaultRem} * 0.8);
  }
`;

export const StyledAddAddressLink = Styled.div`
  color: ${props => props.theme.colors.blue.normal};
  padding-top: calc(${props => props.theme.defaultRem} * 1.2);
  font-size: calc(${props => props.theme.defaultRem} * 1.2);
  cursor: pointer;
  > svg {
    width: calc(${props => props.theme.defaultRem} * 1);
    height: calc(${props => props.theme.defaultRem} * 1);
    margin-left: calc(${props => props.theme.defaultRem} * 1);
  }
`;

export const StyledFormContainer = Styled(Container)`
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
