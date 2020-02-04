import Styled from 'styled-components';

export const StyledCommentsWrapper = Styled.div`
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
    width: 400px;
    --bg: rgba(0, 0, 0, 0.07);
  }
  
  .user-comment .arrow {
    width: 15px;
    height: 25px;
    overflow: hidden;
    position: relative;
    float: right;
    top: 10px;
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
    padding: 6px 8px;
    border-radius: 5px;
    min-height: 120px;
  }
  
  .user-comment .comment-body p {
    margin: 0;
  }
  
  .add-comment {
    svg {
      width: 50px;
      height: 50px;
    }
  }
`;
