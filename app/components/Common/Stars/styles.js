import Styled from 'styled-components';

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
  span:hover ~ span:before,
  span.chose ~ span:before {
    content: "\\2605";
    position: absolute;
    color: gold;
  }
`;
