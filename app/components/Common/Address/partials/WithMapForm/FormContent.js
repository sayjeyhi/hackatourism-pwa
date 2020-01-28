import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import useForm from 'react-hook-form';

import { loadingActions, userActions, userSelectors } from 'ducks';

import { Input, Textarea, Button, Col, Row } from '@snappmarket/ui';
import { cellphoneValidatePattern, englishNumber } from '@snappmarket/helpers';

import Map from 'components/Common/Map';
import mapMessages from 'constants/Messages/map.messages';
import APP_INFO from 'constants/appInfo';

import { StyledFormContainer, StyledMapContainer } from '../../styles';

const FormContent = props => {
  const {
    mode,
    setModalVisibility,
    address,
    vendorCode,
    getAvailableAddresses,
    clearApiStatuses,
    editAddress,
    editAddressStatus,
    addAddress,
    addAddressStatus,
  } = props;
  const [location, setLocation] = useState({});
  const { handleSubmit, register, errors } = useForm({
    defaultValues: {
      title: address.title,
      phone: address.phone,
      address: address.address,
    },
  });

  /**
   * Add or Edit address done
   */
  if (
    addAddressStatus === APP_INFO.API_STATUSES.SUCCESS ||
    editAddressStatus === APP_INFO.API_STATUSES.SUCCESS
  ) {
    clearApiStatuses([
      userActions.addAddressRequest(),
      userActions.editAddressRequest(),
    ]);
    getAvailableAddresses({ vendorCode });
    setModalVisibility(false);
  }

  const handleLocationChange = loc => {
    setLocation(loc);
  };

  const onSubmit = (data, e) => {
    e.preventDefault();

    const submitAction = mode === 'add' ? addAddress : editAddress;
    submitAction({
      latitude: location.lat,
      longitude: location.lng,
      address: englishNumber(data.address),
      phone: englishNumber(data.phone),
      cityId: 1,
      addressId: address.id,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledFormContainer>
        <Row>
          <Col md={6} sm={12}>
            <Input
              id="title"
              name="title"
              label={mapMessages.placeholders.title}
              ref={register}
            />
          </Col>
          <Col md={6} sm={12}>
            <Input
              className="text-left dir-ltr"
              id="phone"
              name="phone"
              label={mapMessages.placeholders.cellphone}
              required
              ref={register({
                required: true,
                ...cellphoneValidatePattern(),
              })}
              message={
                errors.phone && {
                  type: 'error',
                  content: mapMessages.phoneMessages[errors.phone.type],
                }
              }
            />
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <Textarea
              id="address"
              name="address"
              label={mapMessages.placeholders.address}
              required
              ref={register({
                required: true,
              })}
              message={
                errors.address && {
                  type: 'error',
                  content: mapMessages.addressMessages.required,
                }
              }
            />
          </Col>
        </Row>
        <StyledMapContainer>
          <Map
            initialPosition={{
              lat: address.lat,
              lng: address.lng,
            }}
            isStatic={mode === 'edit'}
            mapType="smapp"
            onLocationChange={handleLocationChange}
          />
        </StyledMapContainer>
        ‌
        <Button
          size="md"
          title={
            mode === 'edit'
              ? mapMessages.editAddress.title
              : mapMessages.addAddress.addNewAddress
          }
          loading={[addAddressStatus, editAddressStatus].includes(
            APP_INFO.API_STATUSES.REQUEST,
          )}
          direction="left"
          fullWidth
        />
      </StyledFormContainer>
    </form>
  );
};

FormContent.propTypes = {
  // props
  mode: PropTypes.oneOf(['edit', 'add']),
  address: PropTypes.shape({
    id: PropTypes.number,
    lat: PropTypes.number,
    lng: PropTypes.number,
    title: PropTypes.string,
    address: PropTypes.string,
    phone: PropTypes.string,
  }),
  setModalVisibility: PropTypes.func,
  // redux
  vendorCode: PropTypes.string,
  getAvailableAddresses: PropTypes.func,
  clearApiStatuses: PropTypes.func,
  editAddress: PropTypes.func,
  editAddressStatus: PropTypes.string,
  addAddress: PropTypes.func,
  addAddressStatus: PropTypes.string,
};

const mapStateToProps = state => ({
  vendorCode: vendorSelectors.getVendorCode(state),
  editAddressStatus: userSelectors.getEditAddressStatus(state),
  addAddressStatus: userSelectors.getAddAddressStatus(state),
});

export default connect(mapStateToProps, {
  editAddress: userActions.editAddressRequest,
  addAddress: userActions.addAddressRequest,
  clearApiStatuses: loadingActions.clearSome,
  getAvailableAddresses: vendorActions.getAvailableAddressesRequest,
})(FormContent);
