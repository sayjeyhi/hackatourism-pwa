import Styled from 'styled-components';
// import { StyledContainer } from '../../Global/GridSystem/styles';
import { Container } from '@snappmarket/ui';

export const StyledLayout = Styled.div`
  min-height: 100vh;
  position: relative;
`;

export const StyledContentContainer = Styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(${props => props.theme.defaultRem} * 20);
  flex-wrap: wrap;
  margin-top: calc(${props => props.theme.defaultRem} * 1.6);
  margin-bottom: calc(${props => props.theme.defaultRem} * 1.6);
`;
