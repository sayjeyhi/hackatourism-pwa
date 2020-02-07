import Styled from 'styled-components';

/* eslint-disable indent */
export const StyledSearchBox = Styled.div`
  position: relative;
  width:40%;
  input {
    width: 100%;
    border-radius: calc(1rem * .5);
    border: none;
    padding-right: calc(1rem * 0.8);
    max-height: calc(1rem * 5.5);
    font-size: calc(1rem * 1.3);
    background: #efefef;
    padding: 10px;
    padding-left: 31px;
    text-overflow: ellipsis;
  }
  & > label svg {
    position: absolute;
    left: calc(1rem * 1);
    top: calc(1rem * 1);
    width: calc(1rem * 2);
    height: calc(1rem * 2);
    cursor: pointer;
    * {
      fill: ${props => props.theme.colors.gray.light} !important;
    }
    &.close-icon {
      width: calc(${props => props.theme.defaultRem} * 1.3);
      height: calc(${props => props.theme.defaultRem} * 1.3);
      left: calc(${props => props.theme.defaultRem} * 0.9);
      top: calc(${props => props.theme.defaultRem} );
    }
  }
  
`;

export const StyledSearchBoxHolder = Styled.div`
  position: absolute;
  padding: 0;
  right: 0;
  width: 100%;
  overflow: hidden;
  top: calc(${props => props.theme.defaultRem} * 3.5);
  background: ${props => props.theme.colors.white};
  border-radius: 0 0 calc(${props =>
    props.theme.defaultRem} * 0.5) calc(${props =>
  props.theme.defaultRem} * 0.5);
  display: ${props => (props.visible ? 'block' : 'none')};
  border-top: calc(${props => props.theme.defaultRem} * 0.1) solid ${props =>
  props.theme.colors.gray['ultra-light']};
  box-shadow: 0 calc(${props => props.theme.defaultRem} * 0.4) calc(${props =>
  props.theme.defaultRem} * 0.6) 0 rgba(0, 0, 0, 0.16);
  .part-title {
    font-size: calc(${props => props.theme.defaultRem} * 1.2);
    padding: calc(${props => props.theme.defaultRem} * .7);
    background: ${props => props.theme.colors.gray.bright};
    color: ${props => props.theme.colors.gray.dark};
    width: 100%;
    text-align: right;
  }
  a {
    font-size: calc(${props => props.theme.defaultRem} * 1.4);
    padding: calc(${props => props.theme.defaultRem} * .8) calc(${props =>
  props.theme.defaultRem} * .8) !important;
    margin: 0;
    background: ${props => props.theme.colors.transparent};
    color: ${props => props.theme.colors.gray.normal};
    border-radius: 0; 
    text-align: right;
    border: none;
    display: block;
    &:hover {
      color: ${props => props.theme.colors.blue.normal};
      background: ${props => props.theme.colors.blue.bright};
      svg * {
        fill: ${props => props.theme.colors.blue.normal};
      }
    }
    svg {
      margin-left: calc(${props => props.theme.defaultRem} * 1.2);
      width: calc(${props => props.theme.defaultRem} * 1.6);
      height: calc(${props => props.theme.defaultRem} * 1.6);
    }
  }
`;

export const StyledNotFound = Styled.div`
  padding: calc(${props => props.theme.defaultRem} * 3);
  svg {
    margin-bottom: calc(${props => props.theme.defaultRem} * 1.4);
  }
  .search-icon {
    animation: rotate 1.5s infinite;
  }
  svg {
    transform-basis: 50% 50%;
  }
  .around-shapes {
    animation: shake-around-shapes 6s infinite;
  }
  ${[...new Array(8)].map(
    (key, index) => `
   .around-shapes:nth-child(${index + 1}) {
      animation-delay: ${(index + 1) * 50}ms;
   }`,
  )}
  @keyframes rotate {
    from {
      transform: rotate(0deg)
                 translate(calc(${props => props.theme.defaultRem} * -1.5))
                 rotate(0deg);
    }
    to {
      transform: rotate(360deg)
                 translate(calc(${props => props.theme.defaultRem} * -1.5))
                 rotate(-360deg);
    }
  }
    
  @keyframes shake-around-shapes {
    0% {
      transform: rotate(0) translate(calc(${props =>
        props.theme.defaultRem} * 0.2), calc(${props =>
  props.theme.defaultRem} * 0.2));
    }
    50%{
      transform: rotate(1deg) translate(calc(${props =>
        props.theme.defaultRem} * 0.3), calc(${props =>
  props.theme.defaultRem} * 0.3));
    }
    100% {
      transform: rotate(0) translate(calc(${props =>
        props.theme.defaultRem} * 0.2), calc(${props =>
  props.theme.defaultRem} * 0.2));
    }
  }
`;
/* eslint-enable indent */
