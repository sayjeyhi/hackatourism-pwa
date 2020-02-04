import Styled from 'styled-components';

export const StyledVoipSectionWrapper = Styled.div`
  width: 100%;
  background: #fff;
  padding-bottom: 20px;
`;

export const StyledVoipBanner = Styled.div`
  color: #666;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 800;
  width: 60%;
  p {
    text-align: center;
  }
`;

export const StyledCallFormContainer = Styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(65, 133, 246, 0.12);
  width: calc(100% - 40px);
  position: relative;
  overflow: hidden;
  > div {
    padding: 0;
    margin: 0;
  }
  input {
    border: none;
  }
  label {
    position: absolute;
  }
  button {
        background-color: #4285f6;
    color: #fff;
    display: inline-block;
    padding: 12px 10px;
    border-radius: 5px;
    box-shadow: 3px 4px 10px rgba(66,133,246,.4);
    margin-right: auto;
    -webkit-flex: 0 0 20%;
    -ms-flex: 0 0 20%;
    flex: 0 0 20%;
    font-size: 15px;
    margin: 0;
  }
`;
