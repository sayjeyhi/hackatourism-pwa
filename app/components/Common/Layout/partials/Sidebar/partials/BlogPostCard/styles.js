import Styled from 'styled-components';

export const StyledCreativeSideBarCard = Styled.div`
  display: flex;
  height: 200px;
  width: 100%;
  border-radius: 10px;
  position: relative;
  background: #fff;
  margin-bottom: 40px;
    
  box-shadow:
    0 2.8px 2.2px rgba(241, 39, 17, 0.034),
    0 6.7px 5.3px rgba(241, 39, 17, 0.048),
    0 12.5px 10px rgba(241, 39, 17, 0.06),
    0 22.3px 17.9px rgba(241, 39, 17, 0.072)
  ;
  
  &:before {
    content: "";
    background: #f12711;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #f5af19, #f12711);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #f5af19, #f12711); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    position: absolute;
    top: -1rem;
    right: -1rem;
    width: 100%;
    height: 90%;
    border-radius: 16px;
    padding-bottom: 1rem;
    z-index: -1;
  }
  
  h3 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    max-width: 70%;
    margin: 0;
    font-size: 14px;
    height: auto;
    padding: 13px;
    min-height: 44px;
    color: #444;
  }
  p {
    margin: 4px 25px;
    font-size: 13px;
    text-align: justify;
    max-height: 101px;
    overflow: hidden;
    position: relative;
    + div:first-child {
      width: calc(100% - 16px);
      height: 5px;
      position: absolute;
      bottom: 58px;
      right: 8px;
      transition: 1s linear;
    }
    &:after {
      content: "";
      display: block;
      position: absolute;
      right: 0;
      width: 100%;
      height: 55%;
      bottom: 0;
      background: -webkit-linear-gradient(transparent, #FFF) left repeat;
      background: linear-gradient(transparent, #FFF) left repeat; 
    }
  }

  .author {
    padding: 9px;
    .author-name {
      font-size: 12px;
      color: #999;
      margin-right: 8px;
      font-weight: 500;
    }
    .avatar {
      width: 40px;
      height: 40px;
      overflow: hidden;
      border-radius: 50%;
      > img {
        width: 100%;
        height: auto;
        min-height: 100%;
      }
    }
    .read-more {
      background-color: #4285f6;
      color: #fff;
      display: inline-block;
      padding: 7px 10px;
      border-radius: 5px;
      box-shadow: 3px 4px 10px rgba(66,133,246,.4);
      margin-right: auto;
    }
  }
`;
