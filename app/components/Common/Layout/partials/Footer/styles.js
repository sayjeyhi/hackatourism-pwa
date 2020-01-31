import Styled from 'styled-components';

export const StyledFooter = Styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: calc(${props => props.theme.defaultRem} * 2.4);
  font-size: calc(${props => props.theme.defaultRem} * 1.1);
  color: ${props => props.theme.colors.gray.normal};
  padding: 0 15px;
  
  ul {
    width: 100%;
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    padding: 0;
    margin: 0;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(220, 220, 220, 0.29);
    li {
      display: inline-block;
      margin-right: 3px;
      a {
        color: #336071;
      }
    }
  }
  .copyright {
    margin-top: 8px;
    color: #999;
  }
  h4 {
    font-size: calc(${props => props.theme.defaultRem} * 1.3);
    margin: 0;
    font-weight: 500;
    color: ${props => props.theme.colors.black};
  }
  svg {
    max-width: 100%;
  }
`;

export const StyledFooterSocials = Styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 10px;
  a * {
    fill: #ccc;
    transition: all ease-in-out 0.3s;
  }
  a.twitter:hover * {
    fill: #00acee;
  }
  a.instagram:hover * {
    fill: #7289f7;
  }
  a.medium:hover * {
    fill: #00ab6c;
  }
  a.github:hover * {
    fill: #333;
  }
  a.open-source:hover * {
    fill: #6c93f0;
  }
  svg {
    width: 30px;
  }
`;
