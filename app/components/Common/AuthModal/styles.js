import Styled from 'styled-components';

import { Button, Container } from '@snappmarket/ui';

// import Button from '../../Global/Button';
// import { Container } from '../../Global/GridSystem';

export const StyledTabContainer = Styled(Container)`
   margin: 0 8% 4% 8%;
   max-width: calc(${props => props.theme.defaultRem} * 35);
`;

export const StyledLocationContainer = Styled.section`
  h2 {
    text-align: center;
    margin: calc(${props => props.theme.defaultRem} * 2.4) 0 calc(${props =>
  props.theme.defaultRem} * 1.8) 0;
    font-size: calc(${props => props.theme.defaultRem} * 1.4);
    color: ${props => props.theme.colors.gray.normal}
  }
`;

export const StyledCounter = Styled.div`
  margin-top: calc(${props => props.theme.defaultRem} * 2.2);
  font-size: calc(${props => props.theme.defaultRem} * 1.2);
  color: ${props => props.theme.colors.gray.light};
  text-align: center;
`;

export const StyledBackButton = Styled(Button)`
  position: absolute;
  top: calc(${props => props.theme.defaultRem} * 1);
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.gray.normal};
  i {
    position: relative;
    right: calc(${props => props.theme.defaultRem} * -0.2);
    top: calc(${props => props.theme.defaultRem} * -0.1);
  }
  &:hover {
    background: ${props => props.theme.colors.white};
  }
`;
