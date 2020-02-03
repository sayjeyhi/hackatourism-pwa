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

export const StyledSongsList = Styled.div`
  flex: 0 0 10%;
  margin-left: auto;
  font-size: 12px;
  font-weight: 600;
  svg {
    margin-left: 5px;
    width: 20px;
    height: 20px;
  }
`;

export const StyledRange = Styled.div`
  flex: 0 0 40%;
  margin-left: auto;
  margin-right: auto
  .slidecontainer {
    width: 100%;
  }
  
  .slider {
    -webkit-appearance: none;
    width: 100%;
    height: 10px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
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
