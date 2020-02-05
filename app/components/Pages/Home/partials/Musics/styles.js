import Styled from 'styled-components';

export const StyledMusicsWrapper = Styled.div`
  justify-content: space-between;
  width: 100%;
  
`;

export const StyledMusicWrapper = Styled.button`
  flex: 0 0 calc(25% - 6px);
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  height: 200px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  .type-image {
    overflow: hidden;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    filter: sepia(70%);
    box-shadow: 0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(0,172,193,.4);
    img {
      max-width: 100%;
      min-height: 146px;
    }
    &:after {
      content: '';
      background: -webkit-linear-gradient(transparent,rgba(0, 0, 0, 0.7)) left repeat;
      background: linear-gradient(transparent,rgba(0, 0, 0, 0.7)) left repeat;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
    }
  }
  &:hover {
    .type-image:before {
      content: '';
      width: 0px;
      height: 0px;
      border-top: 20px solid transparent;
      border-bottom: 20px solid transparent;
      border-left: 30px solid #fff;
      z-index: 222;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
    }
  }
  .type-name {
    background: #000;
    border-radius: 66% 34% 39% 61% / 51% 49% 51% 49%;
    color: #fff;
    padding: 8px 16px;
    margin-top: -29px;
    z-index: 55;
  }
`;
