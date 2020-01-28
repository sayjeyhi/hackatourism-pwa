import Styled from 'styled-components';
import { Container } from '@snappmarket/ui';
import { makeRgba } from '@snappmarket/helpers';

import bg from 'resources/img/AboutUsBg.png';
/* eslint-disable indent */
export const StyledAboutUsWrapper = Styled.div`
    position: relative;
    padding-top : calc(${props => props.theme.defaultRem} * 6);
    background: url("${bg}") no-repeat scroll center center / cover ${props =>
  props.theme.colors.white};
    &:after {
        position: absolute;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        top: 0;
        background-image: linear-gradient(${props =>
          makeRgba(0.6, props.theme.colors.blue.normal)},${props =>
  props.theme.colors.white});
        content: '';
    } 
`;
/* eslint-enable indent */

export const StyledAboutUsContentWrapper = Styled.div`
    position: relative;
    z-index: 1010;
    background-color: ${props => props.theme.colors.white};
    padding:  calc(${props => props.theme.defaultRem} * 3.5);
    > h1, h2 {
        color: ${props => props.theme.colors.gray.dark};
    }
    > p {
        font-size: calc(${props => props.theme.defaultRem} * 1.4);
        line-height: 2.5;
        color: ${props => props.theme.colors.gray.normal};
        margin-bottom: calc(${props => props.theme.defaultRem} * 4);
    }
`;

export const StyledAboutUsItemWrapper = Styled.div``;

export const StyledAboutUsItem = Styled.div`
    border: calc(${props => props.theme.defaultRem} * 0.1) solid ${props =>
  props.theme.colors.gray['ultra-light']} ;
    border-radius: calc(${props => props.theme.defaultRem} * 0.5);
    padding: calc(${props => props.theme.defaultRem});
    margin: calc(${props => props.theme.defaultRem});
    > i {
        display: block;
    }
    > span {
        color: ${props => props.theme.colors.gray.dark};
        font-weight: bold;
        font-size: calc(${props => props.theme.defaultRem} * 1.2);
    }
    > p {
        color: ${props => props.theme.colors.gray.light};
        font-size: calc(${props => props.theme.defaultRem} * 1.2);
    }
    > div {
        display: block;
        margin-bottom: calc(${props => props.theme.defaultRem});
    }
`;

export const StyledContentContainer = Styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: calc(${props => props.theme.defaultRem} * 3);
  margin-bottom: calc(${props => props.theme.defaultRem} * 1.6);
  padding-left: calc(${props => props.theme.defaultRem} * 15);
  padding-right: calc(${props => props.theme.defaultRem} * 15);
`;
