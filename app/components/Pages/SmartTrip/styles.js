import Styled from 'styled-components';

export const StyledSmartTripWrapper = Styled.div`
  content: '';
  background: #ffffff94;
  width: 98%;
  border-radius: 20px;
  position: absolute;
  top: 20px;
  z-index: -1;
  box-shadow: 0px 6px 34px -9px rgba(175,175,175,0.28);
  > div {
    padding-top: 50px;
    flex: 0 0 calc(50% - 40px);
    position: relative;
    label {
      font-size: 20px;
      font-weight: 900;
    }
  }
  
  select {
    background: #fff;
    border-radius: 20px;
    padding: 8px;
    height: 42px;
    border: 1px solid #d8d8d8 !important;
    width: 100%;
  }
`;
