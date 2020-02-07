import Styled from 'styled-components';

export const StyledChooseStepButton = Styled.div`
  position: absolute;
  left: 50%;
  bottom: 20px;
  font-size: 18px;
  transform: translate(-50%, 0);
  .next,
  .prev {
    background: transparent;
    border: 1px solid #ccc;
    border-radius: 8px;
    color: #777;
    font-size: 16px !important;
  }
  .next {
    margin-right: 5px;
  }
`;

export const StyledPresentationHolder = Styled.div`
  position: fixed;
  top: 20px;
  right: 0;
  width: 100%;
  height: calc(100vh - 30px);
`;

export const StyledTeam = Styled.div`
  margin-top: 10px;
  > div {
    margin: 8px 0;
    background: #fff;
    border-radius: 10px;
    padding: 4px;
    color: #83b13b;
    span {
      margin-right: auto;
      font-size: 13px;
      color: #999;
    } 
  }
`;
