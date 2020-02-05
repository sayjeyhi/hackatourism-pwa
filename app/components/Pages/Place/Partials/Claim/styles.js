import Styled from 'styled-components';
import { Alert } from '@snappmarket/ui';

export const StyledAlert = Styled(Alert)`
  margin: 28px 5% 0 5%;
  .getAdministration {
    min-width: 100px;
    margin-right: auto;
    border: none;
    position: relative;
    left: -7px;
  }
  .closeBtn {
    display: none;
  }
`;
