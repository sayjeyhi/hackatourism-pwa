import Styled from 'styled-components';

export const StyledWeatherWrapper = Styled.div`
  box-sizing: border-box;
  
  & *,
  & *:before,
  & *:after { box-sizing: border-box; }
  
  
  border-radius: 15px;
  overflow: hidden;
  
  
  --primary-background: #2e3a42;
  --stroke-colors: #6d8fa7;
  
  box-shadow:
    0 -1.8px 2.2px rgba(46, 58, 66, 0.034),
    0 2.8px 2.2px rgba(46, 58, 66, 0.034),
    0 6.7px 5.3px rgba(46, 58, 66, 0.048),
    0 12.5px 10px rgba(46, 58, 66, 0.06),
    0 22.3px 17.9px rgba(46, 58, 66, 0.072),
    0 41.8px 33.4px rgba(46, 58, 66, 0.086),
    0 100px 80px rgba(46, 58, 66, 0.12)
  ;
  svg { 
    fill: var(--primary-background) !important;
  }
`;

export const StyledWeatherHeader = Styled.div`
  color: #f7f7f7;
  background-color: currentColor;
  display: flex;
  align-items: center;
  justify-content: space-around;
  
  &:before {
    content: 'بررسی وضعیت‌هوا';
    font-size: 24px;
    position: absolute;
    color: #999;
    top: 160px;
    font-weight: 900;
  }
  .icon {
    position: relative;
    display: inline-block;
    width: 12em;
    height: 10em;
    font-size: 1em;
    flex: 0 0 12%;
  }

  .cloud {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    width: 3.6875em;
    height: 3.6875em;
    margin: -1.84375em;
    background: currentColor;
    border-radius: 50%;
    box-shadow:
      -2.1875em 0.6875em 0 -0.6875em,
      2.0625em 0.9375em 0 -0.9375em,
      0 0 0 0.375em var(--stroke-colors),
      -2.1875em 0.6875em 0 -0.3125em var(--stroke-colors),
      2.0625em 0.9375em 0 -0.5625em var(--stroke-colors);
  }
  .cloud:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: -0.5em;
    display: block;
    width: 4.5625em;
    height: 1em;
    background: currentColor;
    box-shadow: 0 0.4375em 0 -0.0625em var(--stroke-colors);
  }
  .cloud:nth-child(2) {
    z-index: 0;
    background: var(--stroke-colors);
    box-shadow:
      -2.1875em 0.6875em 0 -0.6875em var(--stroke-colors),
      2.0625em 0.9375em 0 -0.9375em var(--stroke-colors),
      0 0 0 0.375em var(--stroke-colors),
      -2.1875em 0.6875em 0 -0.3125em var(--stroke-colors),
      2.0625em 0.9375em 0 -0.5625em var(--stroke-colors);
    opacity: 0.3;
    transform: scale(0.5) translate(6em, -3em);
    animation: cloud 4s linear infinite;
  }
  .cloud:nth-child(2):after { background: var(--stroke-colors); }

  .sun {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2.5em;
    height: 2.5em;
    margin: -1.25em;
    background: currentColor;
    border-radius: 50%;
    box-shadow: 0 0 0 0.375em var(--stroke-colors);
    animation: spin 18s infinite linear;
  }
  .rays {
    position: absolute;
    top: -2em;
    left: 50%;
    display: block;
    width: 0.375em;
    height: 1.125em;
    margin-left: -0.1875em;
    background: var(--stroke-colors);
    border-radius: 0.25em;
    box-shadow: 0 5.375em var(--stroke-colors);
  }
  .rays:before,
  .rays:after {
    content: '';
    position: absolute;
    top: 0em;
    left: 0em;
    display: block;
    width: 0.375em;
    height: 1.125em;
    transform: rotate(60deg);
    transform-origin: 50% 3.25em;
    background: var(--stroke-colors);
    border-radius: 0.25em;
    box-shadow: 0 5.375em var(--stroke-colors);
  }
  .rays:before {
    transform: rotate(120deg);
  }
  .cloud + .sun {
    margin: -2em 1em;
  }

  .rain,
  .lightning,
  .snow {
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    width: 3.75em;
    height: 3.75em;
    margin: 0.375em 0 0 -2em;
    background: currentColor;
  }

  .rain:after {
    content: '';
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    width: 1.125em;
    height: 1.125em;
    margin: -1em 0 0 -0.25em;
    background: #0cf;
    border-radius: 100% 0 60% 50% / 60% 0 100% 50%;
    box-shadow:
      0.625em 0.875em 0 -0.125em rgba(255,255,255,0.2),
      -0.875em 1.125em 0 -0.125em rgba(255,255,255,0.2),
      -1.375em -0.125em 0 rgba(255,255,255,0.2);
    transform: rotate(-28deg);
    animation: rain 3s linear infinite;
  }

  .bolt {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -0.25em 0 0 -0.125em;
    color: var(--stroke-colors);
    opacity: 0.3;
    animation: lightning 2s linear infinite;
  }
  .bolt:nth-child(2) {
    width: 0.5em;
    height: 0.25em;
    margin: -1.75em 0 0 -1.875em;
    transform: translate(2.5em, 2.25em);
    opacity: 0.2;
    animation: lightning 1.5s linear infinite;
  }
  .bolt:before,
  .bolt:after {
    content: '';
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    margin: -1.625em 0 0 -1.0125em;
    border-top: 1.25em solid transparent;
    border-right: 0.75em solid;
    border-bottom: 0.75em solid;
    border-left: 0.5em solid transparent;
    transform: skewX(-10deg);
  }
  .bolt:after {
    margin: -0.25em 0 0 -0.25em;
    border-top: 0.75em solid;
    border-right: 0.5em solid transparent;
    border-bottom: 1.25em solid transparent;
    border-left: 0.75em solid;
    transform: skewX(-10deg);
  }
  .bolt:nth-child(2):before {
    margin: -0.75em 0 0 -0.5em;
    border-top: 0.625em solid transparent;
    border-right: 0.375em solid;
    border-bottom: 0.375em solid;
    border-left: 0.25em solid transparent;
  }
  .bolt:nth-child(2):after {
    margin: -0.125em 0 0 -0.125em;
    border-top: 0.375em solid;
    border-right: 0.25em solid transparent;
    border-bottom: 0.625em solid transparent;
    border-left: 0.375em solid;
  }

  .flake:before,
  .flake:after {
    content: '\\2744';
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -1.025em 0 0 -1.0125em;
    color: var(--stroke-colors);
    list-height: 1em;
    opacity: 0.2;
    animation: spin 8s linear infinite reverse;
  }
  .flake:after {
    margin: 0.125em 0 0 -1em;
    font-size: 1.5em;
    opacity: 0.4;
    animation: spin 14s linear infinite;
  }
  .flake:nth-child(2):before {
    margin: -0.5em 0 0 0.25em;
    font-size: 1.25em;
    opacity: 0.2;
    animation: spin 10s linear infinite;
  }
  .flake:nth-child(2):after {
    margin: 0.375em 0 0 0.125em;
    font-size: 2em;
    opacity: 0.4;
    animation: spin 16s linear infinite reverse;
  }


  /* Animations */

  @keyframes spin {
    100% { transform: rotate(360deg); }
  }

  @keyframes cloud {
    0% { opacity: 0; }
    50% { opacity: 0.3; }
    100% {
      opacity: 0;
      transform: scale(0.5) translate(-200%, -3em);
    }
  }

  @keyframes rain {
    0% {
      background: #0cf;
      box-shadow:
        0.625em 0.875em 0 -0.125em rgba(255,255,255,0.2),
        -0.875em 1.125em 0 -0.125em rgba(255,255,255,0.2),
        -1.375em -0.125em 0 #0cf;
    }
    25% {
      box-shadow:
        0.625em 0.875em 0 -0.125em rgba(255,255,255,0.2),
        -0.875em 1.125em 0 -0.125em #0cf,
        -1.375em -0.125em 0 rgba(255,255,255,0.2);
    }
    50% {
      background: rgba(255,255,255,0.3);
      box-shadow:
        0.625em 0.875em 0 -0.125em #0cf,
        -0.875em 1.125em 0 -0.125em rgba(255,255,255,0.2),
        -1.375em -0.125em 0 rgba(255,255,255,0.2);
    }
    100% {
      box-shadow:
        0.625em 0.875em 0 -0.125em rgba(255,255,255,0.2),
        -0.875em 1.125em 0 -0.125em rgba(255,255,255,0.2),
        -1.375em -0.125em 0 #0cf;
    }
  }

  @keyframes lightning {
    45% {
      color: var(--stroke-colors);
      background: var(--stroke-colors);
      opacity: 0.2;
    }
    50% {
      color: #0cf;
      background: #0cf;
      opacity: 1;
    }
    55% {
      color: var(--stroke-colors);
      background: var(--stroke-colors);
      opacity: 0.2;
    }
  }
`;

export const StyledWeatherContent = Styled.div`
  background: var(--primary-background);
  padding: 8px 25px;
  position: relative;
  
  label {
    font-size: 20px;
    margin-bottom: 5px;
    color: #fff;
  }
  input {
    background: #fff;
    border: none;
  }
  button {
    position: absolute;
    left: 45px;
    top: 60px;
    width: calc(1rem * 2);
    height: calc(1rem * 2);
    cursor: pointer;
  }
`;

export const StyledSearchResult = Styled.div`
  background: var(--primary-background);
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px dashed #f7f7f742;
  padding: 22px 5px;
    
  &:empty:before {
    content: 'هیچ اطلاعاتی برای نمایش وجود ندارد !';
    font-size: 18px;
    padding: 30px 0;
    color: #999;
    top: 160px;
    font-weight: 600;
  }
`;
