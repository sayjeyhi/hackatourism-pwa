import Styled from 'styled-components';

export const StyledCommentsWrapper = Styled.div`
  position: relative;
  margin-top: 185px;
  &:before {
    content: '';
    background: linear-gradient(transparent,#f7f7f7) left repeat;
    display: block;
    position: absolute;
    right: 0;
    width: 100%;
    height: 216px;
    top: -200px;
    z-index: -1;
  }
  .comment-author {
    text-align: center;
  }
  .comments-icon {
    position: absolute;
    width: 198px;
    height: 198px;
    top: -185px;
    filter: grayscale(85%);
    z-index: -2;
    opacity: 0.6;
  }
  .user-avatar {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid #ccc;
    > img {
      max-width: 100%;
      height: auto;
      min-height: 100%;
    }
  }
  .user-text {
    margin-top: 10px;
  }
  
  .user-comment {
    width: 530px;
    --bg: rgba(0, 0, 0, 0.06);
    max-width: 100%;
  }
  
  .user-comment .arrow {
    width: 15px;
    height: 25px;
    overflow: hidden;
    position: relative;
    float: right;
    top: 15px;
    right: 23px;
  }
  
  .user-comment .arrow .inner {
    width: 0;
    height: 0;
    border-left: 10px solid var(--bg);
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    position: absolute;
    top: 0;
    right: 2px;
  }
  
  .user-comment .comment-body {
    float: left;
    width: calc(100% - 35px);
    font-size: 13px;
    height: auto;
    background-color: var(--bg);
    padding: 8px 13px;
    border-radius: 12px;
    min-height: 80px;
  }
  
  .user-comment .comment-body p {
    margin: 0;
    color: #5d5d5d;
    padding: 6px 9px;
  }
  
  .add-comment {
    width: 600px;
    max-width: 100%;
    border: 2px dashed #d8d8d8 !important;
    padding: 20px 8px;
    font-size: 17px;
    font-weight: 900;
    color: #7b7b7b;
    border-radius: 11px;
    cursor: pointer;
    svg {
      width: 50px;
      height: 50px;
    }
  }
  
  .add-comment-button {
    background-color: #9357e2;
    color: #fff;
    display: inline-block;
    padding: 7px 10px;
    border-radius: 5px;
    box-shadow: 3px 4px 10px rgba(147, 87, 226, 0.57);
    position: relative;
    top: 18px;
    font-size: 18px;
    width: 600px;
    max-width: 100%;
  }
`;
