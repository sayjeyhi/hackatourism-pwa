import Styled from 'styled-components';

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
