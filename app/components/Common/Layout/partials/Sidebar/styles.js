import Styled from 'styled-components';

export const StyledAppDownloadWrapper = Styled.div`
  > svg {
    width: 100%;    
    flex: 0 0 49%;
  }
`;

export const StyledAdsBannerWrapper = Styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

export const StyledAdsBanner = Styled.div`
  background: #f5e8eb;
  color: #598e62;
  border-radius: 5px;
  width: 100%;
  text-align: center;
  padding: 17px;
  margin: 10px 0;
  &:before {
    content: 'Advertisement';
    font-size: 12px;
  }
`;

export const StyledSidebar = Styled.aside`
  display: flex;
  flex-direction: column;
  font-size: calc(${props => props.theme.defaultRem} * 1.1);
  color: ${props => props.theme.colors.gray.normal};
  padding: 10px 15px;
  margin-top: 15px;
  margin-bottom: 15px;
  height: 94vh;
  min-height: 200px;
  overflow: auto;
  position: -webkit-sticky;
  position: sticky;
  top: 80px;
  
  h4 {
    font-size: calc(${props => props.theme.defaultRem} * 1.3);
    margin: 0;
    font-weight: 500;
    color: ${props => props.theme.colors.black};
  }
  svg {
    max-width: 100%;
  }
  
  padding-bottom: 20px;
`;
