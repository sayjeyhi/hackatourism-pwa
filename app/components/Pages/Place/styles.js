import Styled from 'styled-components';
import { Container } from '@snappmarket/ui';

export const StyledProfileWrapper = Styled(Container)`
  justify-content: space-between;
`;

export const StyledProfileSidebar = Styled.aside`
  flex: 0 0 25%;
  display: flex;
  flex-direction: column;
  font-size: calc(${props => props.theme.defaultRem} * 1.4);
  color: ${props => props.theme.colors.gray.normal};
  padding: 0 15px;
  height: 100vh;
  min-height: 200px;
  overflow: auto;
  position: -webkit-sticky;
  position: sticky;
  top: 60px;
  background: #fff;
  border-radius: 8px;
  
  .place-wallpaper{
    background: #ccc;
    height: 150px;
    svg {
      width: 100%;
      * {
        fill: #ccc;
      }
    }
  }
  .place-avatar‌ {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      overflow: hidden;
      border: 1px solid #ccc;
    img{
      max-width: 100%;
      height: auto;
      min-height: 100%;
    }
  }
  .place-name {
  
  }
  .place-joined {
  
  }
  .follow-button {
    background-color: #9357e2;
    color: #fff;
    display: inline-block;
    padding: 7px 10px;
    border-radius: 5px;
    box-shadow: 3px 4px 10px rgba(147, 87, 226, 0.57);
    font-size: 18px;
  }
`;

export const StyledProfileContent = Styled.div`
  flex: 0 0 calc(75% - 16px);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  overflow: hidden;
  > button {
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 0;
    margin: 0;
    color: #ccc;
    border-radius: 0;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    border-left: 1px solid rgba(0,0,0,0.2);
    &:last-child {
      border-bottom: none;
    }
    > svg {
      display: block;
      width: 90%;
    }
  }
  
  
`;
