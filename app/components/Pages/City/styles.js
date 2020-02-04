import Styled from 'styled-components';
import { Container } from '@snappmarket/ui';

export const StyledCityPageWrapper = Styled.div`

`;

export const StyledCityNameWrapper = Styled.div`
  background: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0px 7px 13px -3px rgba(0, 0, 0, 0.2);
  font-size: 24px;
  font-weight: bold;
  display: inline-flex;
  padding: 12px 22px;
  position: relative;
  top: -27px;
`;

export const StyledDistancesContainer = Styled(Container)`
  text-align: right;
  
  svg {
    width: 50px;
    height: 50px;
  }
  h3 {
    font-size: 14px;
    font-weight: 900;
    color: #777;
  }
  .distances {
    list-style-type: none;
    li {
      margin: 0;
      padding: 0;
    }
  }
`;
