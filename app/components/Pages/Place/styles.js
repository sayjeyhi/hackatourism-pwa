import Styled from 'styled-components';
import { Container } from '@snappmarket/ui';

export const StyledProfileWrapper = Styled(Container)`
  justify-content: space-between;
`;

export const StyledProfileSidebar = Styled.aside`
  flex: 0 0 25%;
  font-size: calc(${props => props.theme.defaultRem} * 1.4);
  color: ${props => props.theme.colors.gray.normal};
  height: auto;
  top: 78px;
  position: absolute;
  --wave-theme-color: #b4f8ad;
  .content-holder {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 29px;
    z-index: -2;
    padding-bottom: 20px;
  }
  
  svg.waved-bg {
    transform: rotate(-180deg);
    top: 34px;
    position: absolute;
    width: 100%;
    * {
      fill: var(--wave-theme-color);
    }
  }
  .top-wallpaper {
    border-top-left-radius: 27px;
    border-top-right-radius: 27px;
    background: var(--wave-theme-color);
    height: 35px;
    width: 100%;
  }
  .place-avatar{
    min-width: 150px;
    position: relative;
    top: -95px;
    max-width: 55%;
    img{
      max-width: 100%;
      height: auto;
      min-height: 100%;
      border-radius: 50%;
      border: 2px solid var(--wave-theme-color);
    }
  }
  
  .sidebar-content {
    padding: 0 12px;
  }
  .place-name {
  
  }
  .place-joined {
  
  }
  .follow-button {
    background-color: #9357e2;
    color: #fff;
    display: inline-block;
    border-radius: 5px;
    box-shadow: 3px 4px 10px rgba(147, 87, 226, 0.57);
    font-size: 18px;
    width: calc(100% - 20px);
    border: none;
  }
  .footer-in-aside {
    position: relative;
    bottom: -60px;
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

export const StyledStars = Styled.div`
  unicode-bidi: bidi-override;
  direction: rtl;
  font-size: 24px;
  margin-bottom: 12px;
  span {
    display: inline-block;
    position: relative;
    width: 1.1em;
  }
  span:hover:before,
  span:hover ~ span:before {
    content: "\\2605";
    position: absolute;
    color: gold;
  }
`;
