import Styled from 'styled-components';

import { Container } from '@snappmarket/ui';
import { makeRgba } from '@snappmarket/helpers';
// import { Container } from 'components/Global/GridSystem/styles';
// import { makeRgba } from 'constants/Helpers/themeHelpers';
import MegaMenuBackground from 'resources/img/MegaMenuBackground.png';

export const StyledHeadMenu = Styled.div`
  background: ${props => props.theme.colors.white};
  width: 100%;
  height: auto;
  font-size: calc(${props => props.theme.defaultRem} * 1.4);
  color: ${props => props.theme.colors.gray.dark};
  border-top: calc(${props => props.theme.defaultRem} * 0.1) solid ${props =>
  props.theme.colors.gray['ultra-light']};
  
  box-shadow: 0 calc(${props => props.theme.defaultRem} * 0.3) calc(${props =>
  props.theme.defaultRem} * 0.6) 0 ${props =>
  makeRgba(0.16, props.theme.colors.gray.normal)};
  position: fixed;
  top: ${props =>
    `calc(${props.theme.defaultRem} * ${
      typeof props.top === 'undefined' ? 7 : props.top
    })`};
  z-index: 995;
  transition: 0.8s;
`;

export const StyledHeaderMenuContainer = Styled(Container)`
  display: flex;
`;

export const StyledList = Styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  color: ${props => props.theme.colors.gray.dark};
  svg {
    display: inline-block;
    width: calc(${props => props.theme.defaultRem} * 1.4);
    height: calc(${props => props.theme.defaultRem} * 1.4);
    margin-left: calc(${props => props.theme.defaultRem} * 0.4);
  }
  li {
    display: inline-block;
    margin-left: calc(${props => props.theme.defaultRem} * 2.2);
    padding: calc(${props => props.theme.defaultRem} * 1.4) 0;
    cursor: pointer;
  }
  a {
    color: ${props => props.theme.colors.gray.dark};
  }
`;

export const StyledMenuContent = Styled(Container)`
  display: ${props => (props.show ? 'block' : 'none')};
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  top: calc(${props => props.theme.defaultRem} * 9);
  border-radius: 5px;
  background-color: ${props => props.theme.colors.white};
  padding: ${props =>
    `calc(${props.theme.defaultRem} * 4) calc(${props.theme.defaultRem} * 1) calc(${props.theme.defaultRem} * 1) calc(${props.theme.defaultRem} * 1)`};
  z-index: 994;
  background-image: url(${MegaMenuBackground});
  background-position: 2% 90%;
  background-repeat: no-repeat;
  background-size: calc(${props => props.theme.defaultRem} * 25);
`;

export const StyledCategoryHolder = Styled.div`
  padding: calc(${props => props.theme.defaultRem} * 1) calc(${props =>
  props.theme.defaultRem} * 0.8);
  font-size: calc(${props => props.theme.defaultRem} * 1.3);
  &:hover .category-description{
    color: ${props => props.theme.colors.green.normal}
  }
`;

export const StyledCategoryTitle = Styled.div`
  font-weight: 500;
  color: ${props => props.theme.colors.blue.primary};
`;

export const StyledCategoryDescription = Styled.div`
  padding-top: calc(${props => props.theme.defaultRem} * 0.4);
  font-size: calc(${props => props.theme.defaultRem} * 1.2);
  color: ${props => props.theme.colors.gray.light};
  white-space: nowrap;
  text-overflow: ellipsis;
  width: calc(${props => props.theme.defaultRem} * 16);
  max-width: 100%;
  display: block;
  overflow: hidden
`;
