import { css, createGlobalStyle } from 'styled-components';
import 'resources/styles/fontiran.css';
import 'resources/styles/icons.css';
import 'resources/styles/sanitize.css';
import travelVectorIcon from 'resources/img/travelling-vector.jpg';
import { makeRgba } from '@snappmarket/helpers';

const additional = css`
  html {
    direction: rtl;
    text-align: right;
    font-size: 62%;
    font-family: ${props => props.theme.defaultFont};
    * {
      font-family: inherit;
      outline: none;
    }
    .circle {
      border-radius: 50%;
    }
  }
  body {
    padding: 0 !important;
    margin: 0 !important;
    background-color: ${props => props.theme.colors.gray.bright};

    a {
      text-decoration: none;
    }
  }

  option {
    font-size: 18px !important;
  }

  .top-fixed {
    position: fixed;
    top: 70px;
    z-index: 98;
    width: 100%;
  }
  .MuiPopover-root {
    z-index: 99 !important;
  }
  .MuiToolbar-root > .MuiInputBase-root svg {
    display: none !important;
  }

  .scheduler-root *,
  .MuiPaper-root * {
    font-family: ${props => props.theme.defaultFont} !important;
  }
  .scheduler-root {
    max-width: 100%;
    overflow-x: hidden;
    border-bottom: 1px solid rgb(211, 211, 211);
    .action-buttons button {
      background: #6fb92e;
      box-shadow: none;
      margin-left: 10px;
    }
    .animated-svg {
      position: absolute;
      width: 100%;
      height: 100%;
      overflow-x: hidden;
      top: 70px;
      svg {
        left: -5rem;
        top: -13rem;
        fill: rgba(112, 206, 0, 0.09);
        position: absolute;
        width: 300px;
        max-width: 250px;
        -webkit-animation: spin 120s infinite;
        animation: spin 120s infinite;
        -webkit-transform: rotate(18deg);
        transform: rotate(18deg);
      }
      @keyframes spin {
        to {
          transform: rotate(1turn);
        }
      }
    }
    .DatePicker {
      font-size: 12px !important;
    }
    table {
      direction: rtl;
      tr > td:first-child,
      tr > td {
        border-left: 1px solid rgba(224, 224, 224, 1);
      }
    }
    table *,
    .MuiButton-label {
      font-size: 15px !important;
    }
    .MuiGrid-root.MuiGrid-container {
      direction: rtl;
      > div:nth-child(1) {
        float: right;
      }
      > div:nth-child(2) {
        float: left;
      }
    }
    .MuiGrid-root.MuiGrid-direction-xs-column
      > div
      > div.MuiGrid-root:nth-child(2) {
      > div {
        float: right;
        * {
          font-size: 14px !important;
        }
        > div > div > div {
          text-align: left;
        }
      }
    }
    .navigation-button {
      padding: 0;
      margin-left: 5px;
      svg {
        transform: rotate(180deg);
        width: 35px;
        height: 35px;
      }
      &:nth-child(2) {
        margin-left: 15px;
        svg {
          transform: rotate(-180deg);
        }
      }
    }

    .MuiBackdrop-root {
      position: fixed !important;
    }
    .MuiBackdrop-root
      ~ .MuiPaper-root.MuiDrawer-paper.MuiDrawer-paperAnchorLeft {
      direction: ltr;
      max-height: 100vh;
      width: 35%;
      min-width: 300px;
      padding-bottom: 40px;
      position: fixed !important;
      background-image: url(${travelVectorIcon});
      background-size: contain;
      background-position: bottom;
      background-repeat: no-repeat;
    }
  }
  .MuiPaper-root.MuiPopover-paper * {
    font-size: 15px !important;
    direction: rtl;
  }

  .section {
    border-radius: calc(${props => props.theme.defaultRem} * 0.5);
    background-color: ${props => props.theme.colors.white};
    border: calc(${props => props.theme.defaultRem} * 0.1) solid
      ${props => makeRgba(0.25, props.theme.colors.gray.light)};
    padding: calc(${props => props.theme.defaultRem} * 1.6);
    margin: calc(${props => props.theme.defaultRem} * 1.6) auto;
    &.disabled:after {
      content: ' ';
      z-index: 99999;
      padding: calc(${props => props.theme.defaultRem} * 1.6);
      background: ${props => makeRgba(0.2, props.theme.colors.white)};
      width: 100%;
      height: 100%;
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      content: '';
      z-index: 99999;
    }
  }
  .full-width {
    width: 100%;
  }
  .globalLists {
    list-style-type: none;
    padding-right: 0;
    padding-left: 0;
    a {
      text-decoration: none;
      color: ${props => props.theme.colors.gray.normal};
    }
  }

  .no-select {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Opera and Firefox */
  }
  .no-effect-button {
    border: none !important;
    display: inherit;
    cursor: pointer;
    background: ${props => props.theme.colors.transparent};
  }
  .p-absolute {
    position: absolute;
  }
  .b-none {
    border: none !important;
  }
  .text-normal {
    font-weight: normal !important;
  }
  .text-bold,
  .text-bold * {
    font-weight: bold !important;
  }
  .text-huge,
  .text-huge * {
    font-size: calc(${props => props.theme.defaultRem} * 2.4) !important;
  }
  .text-large,
  .text-large * {
    font-size: calc(${props => props.theme.defaultRem} * 1.8) !important;
  }
  .text-medium,
  .text-medium * {
    font-size: calc(${props => props.theme.defaultRem} * 1.4) !important;
  }
  .text-small,
  .text-small * {
    font-size: calc(${props => props.theme.defaultRem} * 1.2) !important;
  }
  .nice-hr {
    border: none;
    border-top: 1px dashed #e4dede;
  }
  .height-overflow {
    max-height: 100vh;
    overflow: auto;
    padding-bottom: 15px;
  }
`;

const borderBox = css`
  ${[...Array(5).keys()].map(
    i =>
      `
      .br-${i} {
        border-radius: ${i / 10}rem !important;
      }
      
      .p-${i} {
          padding: ${i}rem !important;
      }
      .pt-${i} {
          padding-top: ${i}rem !important;
      }
      .pr-${i} {
          padding-right: ${i}rem !important;
      }
      .pb-${i} {
          padding-bottom: ${i}rem !important;
      }
      .pl-${i} {
          padding-left: ${i}rem !important;
      }
      .m-${i} {
          margin: ${i}rem !important;
      }
      .mt-${i} {
          margin-top: ${i}rem !important;
      }
      .mt-auto {
          margin-top: auto !important;
      }
      .mr-${i} {
          margin-right: ${i}rem !important;
      }
      .mr-auto {
        margin-right: auto !important;
      }
      .mb-${i} {
          margin-bottom: ${i}rem !important;
      }
      .mb-auto {
        margin-bottom: auto !important;
      }
      .ml-${i} {
          margin-left: ${i}rem !important;
      }
      .ml-auto {
        margin-left: auto !important;
      }
      .-m-${i} {
          margin: -${i}rem !important;
      }
      .-mt-${i} {
          margin-top: -${i}rem !important;
      }
      .-mr-${i} {
          margin-right: -${i}rem !important;
      }
      .-mb-${i} {
          margin-bottom: -${i}rem !important;
      }
      .-ml-${i} {
          margin-left: -${i}rem !important;
      }
    `,
  )}
`;

const display = css`
  .d-block {
    display: block;
  }
  .d-inline {
    display: inline;
  }
  .d-inline-block {
    display: inline-block;
  }
  .d-flex {
    display: flex;
  }
  .d-none {
    display: none !important;
  }
`;

const textAlign = `
  .dir-rtl {
    direction: rtl !important;
  }
  .dir-ltr {
    direction: ltr !important;
  }
  .text-center {
    text-align: center !important;
  }
  .text-right {
    text-align: right !important;
  }
  .text-left {
    text-align: left !important;
  }
  .text-justify {
    text-align: justify !important;
  }
  .pull-left {
    float: left !important;
  }
  .pull-right {
    float: right !important;
  }
`;
const flex = css`
  .align-start {
    display: flex;
    align-items: flex-start;
  }
  .align-center {
    display: flex;
    align-items: center;
  }
  .align-end {
    display: flex;
    align-items: flex-end;
  }
  .justify-start {
    display: flex;
    justify-content: flex-start;
  }
  .justify-center {
    display: flex;
    justify-content: center;
  }
  .justify-end {
    display: flex;
    justify-content: flex-end;
  }
  .justify-between {
    display: flex;
    justify-content: space-between;
  }
  .justify-around {
    display: flex;
    justify-content: space-around;
  }
  .flex-row {
    display: flex;
    flex-direction: row;
  }
  .flex-column {
    display: flex;
    flex-direction: column !important;
  }
`;

/* eslint-disable prettier/prettier */
const colorful = css`
  ${props =>
    Object.keys(props.theme.colors).map(color =>
      typeof props.theme.colors[color] === 'string'
        ? `
        .text-${color}{
          color: ${props.theme.colors[color]} !important
        }
        .bg-${color}{
          background-color: ${props.theme.colors[color]} !important
        }
        `
        : Object.keys(props.theme.colors[color]).map(
          shade => `
          .text-${color}-${shade}{
            color: ${props.theme.colors[color][shade]} !important;
          }
          .bg-${color}-${shade}{
            background-color: ${props.theme.colors[color][shade]} !important;
          }
        `,
        ),
    )}
`;
/* eslint-enable prettier/prettier */

const rotation = css`
  .rotate-45 {
    transform: rotate(45deg);
  }
  .rotate-90 {
    transform: rotate(90deg);
  }
  .rotate-180 {
    transform: rotate(180deg);
  }
  .spin,
  .icon-spinner {
    animation-name: spin;
    animation-duration: 800ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

/* eslint-disable indent */
const toasts = css`
  .iziToast {
    font-family: ${props => props.theme.defaultFont};
    height: calc(${props => props.theme.defaultRem} * 8);
    min-width: calc(${props => props.theme.defaultRem} * 31);
    border-radius: calc(${props => props.theme.defaultRem} * 0.5); !important;
    box-shadow: 0 0 calc(${props =>
      props.theme.defaultRem} * 0.6) 0 rgba(0, 0, 0, 0.16) !important;
    border: solid calc(${props => props.theme.defaultRem} * 0.1) ${props =>
  props.theme.colors.gray['ultra-light']} !important;
    .iziToast-close {
      background-size: calc(${props => props.theme.defaultRem} * 1.4);
    }
    .iziToast-body {
      height: 100% !important;
      padding-right: calc(${props => props.theme.defaultRem} * 5) !important;
    }
    .iziToast-texts {
      height: 100%;
      display: flex !important;
      align-items: center !important;
      margin-top: calc(${props => props.theme.defaultRem} * 0.5) !important;
    }
    .iziToast-progressbar > div {
      height: calc(${props => props.theme.defaultRem} * 0.4);
      background: ${props => makeRgba(0.17, props.theme.colors.black)};
      border-radius: 0 !important;
    }
    .iziToast-icon {
      border-radius: 50% !important;
      margin-top: calc(${props => props.theme.defaultRem} * -1.6) !important;
      width: calc(${props => props.theme.defaultRem} * 3.2) !important;
      height: calc(${props => props.theme.defaultRem} * 3.2) !important;
    }
    .toast-description {
      font-size: calc(${props => props.theme.defaultRem} * 1.2);
      margin-top: calc(${props => props.theme.defaultRem} * 0.8);
    }
  }
  .iziToast-rtl {
      padding: ${props =>
        `calc(${props.theme.defaultRem} * 0.8) 0 calc(${props.theme.defaultRem} * 0.9) calc(${props.theme.defaultRem} * 5.2)`} !important;
  }
  .iziToast.iziToast-color-red {
    background: ${props => props.theme.colors.red.bright};
    border-right: calc(${props =>
      props.theme.defaultRem} * 0.6) solid ${props =>
  props.theme.colors.red.normal} !important;
    .iziToast-icon {
      background-color: ${props => props.theme.colors.red.normal} !important;
    }
  }
  .iziToast.iziToast-color-orange {
    background: ${props => props.theme.colors.orange.bright};
    border-right: calc(${props =>
      props.theme.defaultRem} * 0.6) solid ${props =>
  props.theme.colors.orange.normal} !important;
    .iziToast-icon {
      background-color: ${props => props.theme.colors.orange.normal} !important;
    }
  }
  .iziToast.iziToast-color-blue {
    background: ${props => props.theme.colors.blue.bright};
    border-right: calc(${props =>
      props.theme.defaultRem} * 0.6) solid ${props =>
  props.theme.colors.blue.normal} !important;
    .iziToast-icon {
      background-color: ${props => props.theme.colors.blue.normal} !important;
    }
  }
  .iziToast.iziToast-color-green {
    background: ${props => props.theme.colors.green.bright};
    border-right: calc(${props =>
      props.theme.defaultRem} * 0.6) solid ${props =>
  props.theme.colors.green.normal} !important;
    .iziToast-icon {
      background-color: ${props => props.theme.colors.green.normal} !important;
    }
  }
`;
/* eslint-enable indent */

const GlobalStyles = createGlobalStyle`
  ${additional}
  ${borderBox}
  ${display}
  ${textAlign}
  ${flex}
  ${colorful}
  ${rotation}
  ${toasts}
`;

export default GlobalStyles;
