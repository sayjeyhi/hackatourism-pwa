import React from 'react';
import PropTypes from 'prop-types';
import { JsonLD } from '@snappmarket/ui';

// import JsonLD from '../../../Global/JsonLD';
const Schema = props => {
  const { addresses } = props;
  const { address, title } = addresses;

  return (
    <JsonLD
      schema={{
        '@context': 'http://schema.org',
        '@type': 'ItemList',
        name: address,
        title,
      }}
    />
  );
};
Schema.propTypes = {
  addresses: PropTypes.object.isRequired,
};
export default Schema;
