import React from 'react';
import PropTypes from 'prop-types';
import { CheckBox } from '@snappmarket/ui';
import AddressSchema from '../Schema';
import { StyledAddressHolder } from '../../styles';

const Item = props => {
  const { title, address, checkbox, className } = props;

  return (
    <>
      <AddressSchema addresses={{ address, title }} />
      <StyledAddressHolder
        className={`flex-row address-single-item ${className}`}
      >
        {!!checkbox && (
          <CheckBox status="blue" className="circle" border={false} selected />
        )}
        {!!title && <strong>{title}</strong>}
        {address}
      </StyledAddressHolder>
    </>
  );
};

Item.propTypes = {
  title: PropTypes.string,
  address: PropTypes.string.isRequired,
  className: PropTypes.string,
  checkbox: PropTypes.bool,
};

export default Item;
