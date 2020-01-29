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
