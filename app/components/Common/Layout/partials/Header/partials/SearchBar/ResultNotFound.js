import React from 'react';
import SearchNotFound from 'resources/svg/SearchNotFound';
import generalMessages from 'constants/Messages/general.messages';
import { StyledNotFound } from './styles';

const ResultNotFound = () => (
  <StyledNotFound className="align-center justify-center flex-column">
    <SearchNotFound className="d-block" />
    <div>{generalMessages.header.search.notFound}</div>
  </StyledNotFound>
);

export default ResultNotFound;
