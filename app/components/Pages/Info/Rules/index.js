import React from 'react';

import SeoHead from 'components/Common/Seo/SeoHead';
import rulesMessages from 'constants/Messages/rules.messages';
import { StyledRulesWrapper } from './styles';

const Rules = () => (
  <>
    <SeoHead title={rulesMessages.rulesTitle} />
    <StyledRulesWrapper>
      <h1>{rulesMessages.rulesTitle}</h1>
      {rulesMessages.rulesContent.map((message, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <p key={index}>{message}</p>
      ))}
      <span>{rulesMessages.address}</span>
      <span>{rulesMessages.phone}</span>
      <span>{rulesMessages.email}</span>
      <span>{rulesMessages.zipCode}</span>
    </StyledRulesWrapper>
  </>
);

export default Rules;
