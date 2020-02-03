import Styled from 'styled-components';

export const StyledCommentsWrapper = Styled.div`
  .message {
    width: 400px;
    --bg: rgba(0,0,0,0.3);
  }
  
  .message .arrow {
    width: 15px;
    height: 25px;
    overflow: hidden;
    position: relative;
    float: right;
    top: 10px;
    right: 13px;
  }
  
  .message .arrow .inner {
    width: 0;
    height: 0;
    border-left: 10px solid var(--bg);
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    position: absolute;
    top: 0;
    right: 2px;
  }
  
  .message .message-body {
    float: left;
    width: calc(100% - 40px);
    height: auto;
    background-color: var(--bg);
    padding: 6px 8px;
    border-radius: 5px;
  }
  
  .message .message-body p {
    margin: 0;
  }

`;
