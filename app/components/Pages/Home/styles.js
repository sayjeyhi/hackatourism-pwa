import Styled from 'styled-components';
import { Col } from '@snappmarket/ui';

export const StyledHomeItemsColumn = Styled(Col)`
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  align-items: center;
  font-size: 14px;
  justify-content: center;
  padding: 60px 0;
  margin: 10px;
  max-width: calc(33.333333333333336% - 20px);
  min-width: calc(33.333333333333336% - 20px);
`;

export const StyledTciketLikeCard = Styled.div`
  #tickets{
    width: 250px;
    position: relative;
    margin: 100px auto;
    &:after{
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 8px;
        box-shadow: 4px 0 80px -30px #000;
        border-radius: 10px;
    }
}
.ticket-container{
    position: relative;
    overflow: hidden;
}
.ticket{
    width: 237px;
    height: 60px;
    background: #fff;
    border: 3px solid #e8ebf0;
    border-right: 0;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}
.corner, .corners{
    width: 18px;
    position: absolute;
    top: 0;
    bottom: 0;
}
.corner{
    height: 26px;
    right: -8px;
    margin: auto;
    z-index: 2;
    border: 3px solid #e8ebf0;
    border-radius: 7px;
    box-sizing: border-box;
}
.corners{
    right: -11px;
    z-index: 1;
    &:before, &:after{
        content: '';
        display: block;
        width: 10px;
        height: 23px;
        position: absolute;
        left: -3px;
        background: #fff;
        box-sizing: border-box;
    }
    &:before{
        top: 0;
        border-top: 3px solid #e8ebf0;
        border-right: 3px solid #e8ebf0;
        border-top-right-radius: 10px;
    }
    &:after{
        bottom: 0;
        border-bottom: 3px solid #e8ebf0;
        border-right: 3px solid #e8ebf0;
        border-bottom-right-radius: 10px;
    }
}
`;
