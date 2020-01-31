import Styled from 'styled-components';

export const StyledRulesWrapper = Styled.div`
    text-align: right;
    background-color: ${props => props.theme.colors.white};
    padding: calc(${props => props.theme.defaultRem} * 2) calc(${props =>
  props.theme.defaultRem} * 8);
    > h1 {
        margin-bottom: calc(${props => props.theme.defaultRem}* 3);
        text-align: center;
    }
    > p {
        font-size: calc(${props => props.theme.defaultRem} * 1.4);
        line-height: 2.5;
        padding: calc(${props => props.theme.defaultRem}) 0;
    }
    > span {
        text-align: right;
        line-height: 2;
        display: block;
        font-size: calc(${props => props.theme.defaultRem} * 1.4);
        
    }
`;
