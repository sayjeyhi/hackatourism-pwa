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
    font-size: 18px;
    font-weight: 900;
    color: #4c4b4b;
    position: relative;
    top: 2px;
    svg {
      margin-left: 12px;
    }
  }
  .distances {
    list-style-type: none;
    li {
      margin: 0;
      padding: 0;
      font-size: 14px;
      
      div {
        float: left;
        color: #45a235;
      }
      
      div:after {
        content: 'ک.م';
        color: #9a9a9a;
        font-size: 11px;
        margin-right: 9px;
      }
    }
  }
`;

export const StyledPlace = Styled.div`
  flex: 0 0 22%;
  border-radius: 35% 65% 26% 74% / 64% 36% 64% 36%;
  background: #e8e8e8;
  padding: 25px 24px;
  font-size: 17px;
  font-weight: 900;
  color: rgba(0,0,0,0.7);
  button {
    background-color: #46a93a;
    color: #fff;
    display: inline-block;
    padding: 7px 10px;
    border-radius: 5px;
    box-shadow: 3px 4px 10px rgba(69, 169, 58, 0.6);
    position: relative;
    top: 18px;
    float: left;
  }
`;
