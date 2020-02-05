import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MapInfo from 'constants/mapSettings';
import mapMessages from 'constants/Messages/map.messages';
// import Button from 'components/Global/Button';
// import OptionGroup from 'components/Global/OptionGroup';
import { OptionGroup, Button } from '@snappmarket/ui';

import EditIcon from 'resources/svg/Icons/EditIcon';
import TrashIcon from 'resources/svg/Icons/TrashIcon';
import PlusIcon from 'resources/svg/Icons/PlusIcon';

import Item from './Item';
import AddressModal from '../WithMapForm';
import ConfirmDelete from '../ConfirmDelete';
import {
  StyledAddAddressLink,
  StyledAddressHolderButtons,
  StyledAddressList,
} from '../../styles';

/**
 * Make list of addresses that allows us to add, edit, delete
 * @param props {addresses: [{ id, title }]}
 * @returns {null|*}
 * @constructor
 */
const Index = props => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [mode, setMode] = useState('add');
  const [workingItem, setWorkingItem] = useState({});

  const {
    addresses,
    selectedItem,
    radioSize,
    onSelect,
    onDelete,
    onEdit,
    onAdd,
  } = props;

  const handleSelectAddress = item => {
    onSelect(item);
  };

  const handleAddAddress = () => {
    setMode('add');
    setWorkingItem({
      title: '',
      address: '',
      phone: '',
      lat: MapInfo.defaultLocation.lat,
      lng: MapInfo.defaultLocation.lng,
    });
    setModalVisibility(true);
    onAdd();
  };

  const handleEditAddress = item => {
    setMode('edit');
    setWorkingItem({
      ...item,
      lng: item.lon,
      phone: item.phone.replace(/\+98/, '0'),
    });
    setModalVisibility(true);
    onEdit();
  };

  const handleDeleteAddress = item => {
    setWorkingItem(item);
    setDeleteConfirmation(true);
    onDelete();
  };

  /**
   * We should normalize addresses in optionGroup valid object schema
   */
  const normalizedAddresses = addresses.map(addressItem => ({
    value: addressItem.id,
    title: <Item title={addressItem.title} address={addressItem.address} />,
    disabled: !addressItem.is_available,
    meta: (
      <StyledAddressHolderButtons className="flex-row">
        <Button
          icon={<EditIcon />}
          modifier="link"
          color="gray"
          className="circle"
          shade="ultra-light"
          size="xs"
          onClick={() => handleEditAddress(addressItem)}
        />
        <Button
          icon={<TrashIcon />}
          modifier="link"
          color="gray"
          className="circle"
          shade="ultra-light"
          size="xs"
          onClick={() => handleDeleteAddress(addressItem)}
        />
      </StyledAddressHolderButtons>
    ),
  }));

  if (!normalizedAddresses.length) {
    return null;
  }

  return (
    <>
      <AddressModal
        modalVisibility={modalVisibility}
        setModalVisibility={setModalVisibility}
        mode={mode}
        address={workingItem}
      />
      <ConfirmDelete
        modalVisibility={deleteConfirmation}
        setModalVisibility={setDeleteConfirmation}
        address={workingItem}
      />
      <StyledAddressList className="no-select">
        <OptionGroup
          status="blue"
          className="address-list-wrapper"
          radioSize={radioSize}
          options={normalizedAddresses}
          selectedItem={selectedItem}
          onSelectItem={handleSelectAddress}
          hasRadio
        />
        <StyledAddAddressLink
          className="address-add-link"
          onClick={handleAddAddress}
        >
          <PlusIcon className="rotate-45" />
          {mapMessages.addAddress.new}
        </StyledAddAddressLink>
      </StyledAddressList>
    </>
  );
};

Index.propTypes = {
  addresses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      address: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectedItem: PropTypes.number,
  radioSize: PropTypes.number,
  onSelect: PropTypes.func,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  onAdd: PropTypes.func,
};

Index.defaultProps = {
  selectedItem: null,
  radioSize: 2,
  onSelect: f => f,
  onDelete: f => f,
  onEdit: f => f,
  onAdd: f => f,
};

export default Index;
