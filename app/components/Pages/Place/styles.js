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
    
  }
  .place-name {
  
  }
  .place-joined {
  
  }
  .follow-button {
  
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
