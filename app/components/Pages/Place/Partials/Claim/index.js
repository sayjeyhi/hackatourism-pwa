import React from 'react';
import { Button } from '@snappmarket/ui';
import { StyledAlert } from './styles';

const Claim = () => (
  <div className="pb-4">
    <StyledAlert className="align-center">
      این صفحه و کسب و کار متعلق به من است :)
      <Button
        className="d-inline-block getAdministration"
        size="sm"
        color="green"
        title="درخواست مدیریت"
      />
    </StyledAlert>
  </div>
);

export default Claim;
