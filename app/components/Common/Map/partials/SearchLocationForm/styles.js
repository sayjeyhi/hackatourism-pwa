import Styled from 'styled-components';
import { lighten } from 'polished';

export const StyledSearchFormContainer = Styled.div`
  background-color: ${props => props.theme.colors.white};
  position: absolute;
  z-index: 1000;
  top: calc(${props => props.theme.defaultRem} * 1);
  left: calc(${props => props.theme.defaultRem} * 1.5);
  right: calc(${props => props.theme.defaultRem} * 1.5);
  border-radius: calc(${props => props.theme.defaultRem} * 3);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 calc(${props => props.theme.defaultRem} * 0.2)
    calc(${props => props.theme.defaultRem} / 2) rgba(0, 0, 0, 0.1);
  border: calc(${props =>
    props.theme.defaultRem} / 10) solid rgba(0, 0, 0, 0.2);
  
  height: calc(${props => props.theme.defaultRem} * 4.3);
  
  input {
    flex-grow: 1;
    background: none;
    border: none;
    height: 100%;
    font-size: calc(${props => props.theme.defaultRem} * 1.3);
  }
  .icon {
    display: block;
    color: ${props => props.theme.colors.blue.normal};
  }
`;

export const StyledSearchResultContainer = Styled.div`
  background-color: ${props => props.theme.colors.white};
  position: absolute;
  z-index: 1000;
  max-height: 50%;
  overflow-y: auto;
  right: calc(${props => props.theme.defaultRem} * 2);
  left: calc(${props => props.theme.defaultRem} * 2);
  top: calc(${props => props.theme.defaultRem} * 5.7);
  border-radius: calc(${props => props.theme.defaultRem} * 0.5);
  > ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    li {
      border-bottom: solid calc(${props => props.theme.defaultRem} / 10)
        rgba(0, 0, 0, 0.1);
      button {
        cursor: pointer;
        display: block;
        width: 100%;
        color: ${props => props.theme.colors.gray.normal};
        > {
          * {
            display: inline-block;
          }
          span {
            margin-bottom: calc(${props => props.theme.defaultRem} / 2);
            font-size: calc(${props => props.theme.defaultRem} * 1.5);
          }
          small {
            color: ${props => lighten(0.2, props.theme.colors.gray.normal)};
            font-size: calc(${props => props.theme.defaultRem} * 1.2);
          }
        }
      }
    }
    li:last-child{
      border-bottom: none;
    }
  }
`;
