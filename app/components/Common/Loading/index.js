import React from 'react';
import { StyledLoader } from './styles';

const Loading = () => (
  <StyledLoader>
    <div className="lds-ellipsis">
      <div />
      <div />
      <div />
      <div />
    </div>
  </StyledLoader>
);

export default Loading;
