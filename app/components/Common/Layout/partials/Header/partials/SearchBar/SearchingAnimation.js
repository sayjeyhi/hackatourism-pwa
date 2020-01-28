import React from 'react';
import SearchLoading from 'resources/svg/SearchLoading';
import generalMessages from 'constants/Messages/general.messages';
import { StyledNotFound } from './styles';

const ResultNotFound = () => (
  <StyledNotFound className="align-center justify-center flex-column">
    <SearchLoading className="d-block searching" />
    <div>{generalMessages.header.search.pleaseWait} ...</div>
  </StyledNotFound>
);

export default ResultNotFound;
