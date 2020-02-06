import Styled from 'styled-components';
import { lighten } from 'polished';
// import bg from '../../../resources/img/AboutUsBg.png';
import { Accordion } from '@snappmarket/ui';

export const StyledFaqTopSection = Styled.div``;

export const StyledFaqAccordion = Styled(Accordion)`
    margin: 0;
    > div {
        margin: 0;
        padding: 0;     
        border-bottom: none;
    }
`;

export const StyledFaqWrapper = Styled.div``;

export const StyledFaqItemWrapper = Styled.div``;

/* eslint-disable indent */
export const StyledItemTitle = Styled.span`
    font-size: calc(${props => props.theme.defaultRem} * 1.4);
    color: ${props =>
      props.active
        ? props.theme.colors.blue.normal
        : props.theme.colors.gray.normal};
`;
/* eslint-enable indent */

export const StyledIconWrapper = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: calc(${props => props.theme.defaultRem} * 8) ;
    border: calc(${props => props.theme.defaultRem} * 0.2) solid ${props =>
  props.theme.colors.gray['ultra-light']};
    border-radius: calc(${props => props.theme.defaultRem} * 5);
    padding: calc(${props => props.theme.defaultRem} * 2) ;
    margin-bottom: calc(${props => props.theme.defaultRem});
`;

export const StyledFaqQuestionWrapper = Styled.div`
  .section {
    > div {
      margin : 0 !important;
    }
  }
`;

export const StyledFaqQuestionItem = Styled.div`
  display: block;
  width: 100%;
`;

export const StyledItemHeader = Styled.div`
    padding: calc(${props => props.theme.defaultRem}) calc(${props =>
  props.theme.defaultRem} * 2);
    display: flex;
    align-items: center;
`;

export const StyledFaqItemContent = Styled.div`
    border-radius: calc(${props => props.theme.defaultRem} * 0.3);
    background-color: ${props => lighten(0.4, props.theme.colors.blue.normal)};
    padding: calc(${props => props.theme.defaultRem} * 2);
`;
