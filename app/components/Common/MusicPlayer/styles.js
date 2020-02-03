import Styled from 'styled-components';
import { Button } from '@snappmarket/ui'

export const StyledMusicPlayer = Styled.div`
  width: 100%;
  height: 120px;
  background-color: grey;
  position: fixed;
  bottom: 0;
  & input {
    width: 100%;
    direction: ltr;
  }
  & > div {
    display: flex;
  }
`;
export const StyledTimer = Styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;
