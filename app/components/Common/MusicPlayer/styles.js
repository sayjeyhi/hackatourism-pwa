import Styled from 'styled-components';

export const StyledButton = Styled.button`
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const StyledMusicPlayer = Styled.div`
  width: 100%;
  height: 45px;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  color: #999;
  box-shadow: 1px -5px 20px rgba(0, 0, 0, 0.04);
  z-index: 999999;
  .player {
    width: 0 !important;
  }
  & input {
    width: 100%;
    direction: ltr;
  }
  & > div {
    display: flex;
  }
`;

export const StyledTimer = Styled.div`
  display: flex;
  justify-content: space-between;
  p {
     margin: 0;
     padding: 0;
  }
`;

export const StyledSongsList = Styled.button`
  flex: 0 0 10%;
  margin-left: auto;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  color: #333;
  svg {
    margin-left: 5px;
    width: 20px;
    height: 20px;
  }
  .songsList {
    background: #fff;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    max-height: 35%;
    height: 236px;
    overflow: auto;
    display: none;
    position: fixed;
    width: 200px;
    bottom: 45px;
    box-shadow: 1px -5px 20px rgba(0,0,0,0.04);
    &.active {
      display: block;
    }
    ul {
      padding:0;
      margin: 0;
      list-style-type: none;
    }
    ul > li {
      margin: 0;
      text-align: right;
      padding: 8px;
      color: #2ea327;
      border-bottom: 1px dashed #a9a9a94a;
      .duration {
        float: left;
        color: #8d8d8d;
      }
    }
  }
`;

export const StyledRange = Styled.div`
  flex: 0 0 40%;
  margin-left: auto;
  margin-right: auto
  
  .slider {
    -webkit-appearance: none;
    width: 100%;
    height: 10px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
    border-radius: 4px;
    overflow: hidden;
  }
  
  .slider:hover {
    opacity: 1;
  }
  
  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 10px;
    height: 10px;
    background: #4CAF50;
    cursor: pointer;
  }
  
  .slider::-moz-range-thumb {
    width: 10px;
    height: 10px;
    background: #4CAF50;
    cursor: pointer;
  }
`;
