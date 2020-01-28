import Styled from 'styled-components';

export const StyledFooter = Styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: calc(${props => props.theme.defaultRem} * 2.4);
  font-size: calc(${props => props.theme.defaultRem} * 1.1);
  color: ${props => props.theme.colors.gray.normal};
  line-height: calc(${props => props.theme.defaultRem} * 2.8);
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
