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

export const StyledGetPhoneNumber = Styled.div`
  display: flex;
  width: 90%;
  border-top: 1px dashed rgba(0,0,0,0.4);
  h3 {
    font-size: 20px;
    font-weight: 900;
  }
  .callFormContainer {
    background: #fff;
    border-radius: 18px;
    box-shadow: 0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(65, 133, 246, 0.12);
    width: calc(100% - 40px);
    position: relative;
    overflow: hidden;
    > div {
      padding: 0;
      margin: 0;
      width: 80%;
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
      width: 20%;
    }
  }
`;

export const StyledChooseCity = Styled.div`
  display: flex;
  width: 90%;
  border-top: 1px dashed rgba(0,0,0,0.4);
  h3 {
    font-size: 20px;
    font-weight: 900;
  }
  > select {
    background: #fff;
    border-radius: 20px;
    padding: 8px;
    height: 42px;
    border: 1px solid #d8d8d8 !important;
    option {
      padding: 8px;
    }
  }
`;

export const StyledChooseAdviser = Styled.div`
  display: flex;
  width: 90%;
  h3 {
    font-size: 20px;
    font-weight: 900;
  }
  .adviser-holder {
    background: #fff;
    border-radius: 11px;
    padding: 8px;
    border: 1px solid #ccc;
    flex: 0 0 calc(34% - 10px);
  }
  .adviser-name {
    font-weight: 900;
    font-size: 18px;
    color: #333;
  }
  
  .adviser-categories {
    margin: 18px 0;
    
    > div {
      background: #e4e4e4;
      border-radius: 8px;
      box-shadow: 0 2px 0 rgba(0,0,0,0.3);
      padding: 4px 8px;
      display: inline-block;
      margin: 2px 8px;
      &:before {
        content: '#';
      }
    }
  }
  
  .make-call {
    background-color: #4285f6;
    color: #fff;
    display: inline-block;
    padding: 12px 10px;
    border-radius: 5px;
    box-shadow: 3px 4px 10px rgba(66,133,246,.4);
    margin-right: auto;
    flex: 0 0 90%;
    font-size: 15px;
    margin: 0;
  }
`;

export const StyledLoading = Styled.div`
  
`;
