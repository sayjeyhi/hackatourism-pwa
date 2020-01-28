import Styled from 'styled-components';

import { Button, Container } from '@snappmarket/ui';
import { makeRgba } from '@snappmarket/helpers';
// import Button from 'components/Global/Button';
// import { makeRgba } from 'constants/Helpers/themeHelpers';
// import { Container } from 'components/Global/GridSystem/styles';

export const StyledHeader = Styled.header`
  background: ${props => props.theme.colors.white};
  width: 100%;
  height: calc(${props => props.theme.defaultRem} * ${props => props.height});
  box-shadow: 0 0 calc(${props => props.theme.defaultRem} * 0.6) 0 ${props =>
  makeRgba(0.16, props.theme.colors.gray.normal)};
  font-size: calc(${props => props.theme.defaultRem} * 1.4);
  color: ${props => props.theme.colors.gray.dark};
  position: ${props => (props.fixed ? 'fixed' : 'relative')};
  top: 0;
  left: 0;
  right: 0;
  z-index: 996;
`;

export const StyledHeaderContainer = Styled(Container)`
   display: flex;
`;

export const StyledHeadSpace = Styled.div`
  width: 100%;
  height: calc(${props => props.theme.defaultRem} * 12);
`;

export const StyledHeaderRightSide = Styled.div`
  flex-direction: row;
  margin-left:auto;
  position: relative;
  svg {
    height: calc(${props => props.theme.defaultRem} * 3.5);
    width: calc(${props => props.theme.defaultRem} * 6.5);
  }
`;

export const StyledHeaderLeftSide = Styled.div`
  justify-content: center;
  margin-right:auto;
  position: relative;
 .fill-white {
    width: calc(${props => props.theme.defaultRem} * 2.4);
    height: calc(${props => props.theme.defaultRem} * 2.4);
    margin-left: calc(${props => props.theme.defaultRem} * 1);
    fill: ${props => props.theme.colors.white}
 }
 .checkout-btn{
    height: calc(${props => props.theme.defaultRem} * 3.6);
 }
`;

export const StyledUserBtn = Styled(Button)`
  white-space: nowrap;
  text-overflow: ellipsis;
  min-width: calc(${props => props.theme.defaultRem} * 2);
  max-width: calc(${props => props.theme.defaultRem} * 14);
  display: block;
  overflow: hidden;
`;

/* eslint-disable indent */
export const StyledChooseSendToHolder = Styled.div`
  margin-right: calc(${props => props.theme.defaultRem} * 3);
  position: relative;
  .chose-text {
    white-space: nowrap;
    text-overflow: ellipsis;
    min-width: calc(${props => props.theme.defaultRem} * 2);
    max-width: calc(${props => props.theme.defaultRem} * 14);
    display: block;
    overflow: hidden;
  }
  .angel-down-icon {
    margin-right: calc(${props => props.theme.defaultRem} * 0.8);
  }
  & button > svg {
    width: calc(${props => props.theme.defaultRem} * 1.9) !important;
    height: calc(${props => props.theme.defaultRem} * 1.9) !important;
    margin-left: calc(${props => props.theme.defaultRem} * 0.8);
    margin-top: calc(${props => props.theme.defaultRem} * -0.1);
  }
  & > button {
    border-radius: calc(${props => props.theme.defaultRem} * 0.5);
    padding: calc(${props => props.theme.defaultRem} * 1) calc(${props =>
  props.theme.defaultRem} * 1);
    &:hover {
      background: ${props => props.theme.colors.blue.bright};
    }
  }
`;
/* eslint-enable indent */

export const StyledHeaderProfileIcon = Styled.a`
  width: calc(${props => props.theme.defaultRem} * 3);
  height: calc(${props => props.theme.defaultRem} * 3);
  background: ${props => props.theme.colors.gray.bright};
  border-radius: 50%;
  justify-content: center;
  cursor: pointer;
  svg {
    width: calc(${props => props.theme.defaultRem} * 1.6);
    height: calc(${props => props.theme.defaultRem} * 1.6);
  }
`;

export const StyledHeaderProfile = Styled.div`
  justify-content: center;
  margin-left: calc(${props => props.theme.defaultRem} * 1.2);
  i {
    margin-left: calc(${props => props.theme.defaultRem} * 0.8);
  }
`;

export const StyledLightBox = Styled.div`
  position: fixed;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  text-align: right;
  overflow-y: auto;
  padding: calc(${props => props.theme.defaultRem} * 4) 0;
  display: ${props => (props.show ? 'block' : 'none')};
  width: 100%;
  background: ${props => makeRgba(0.2, props.theme.colors.black)};
  z-index:993;
`;
