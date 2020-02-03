import React, { createRef, useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import APP_INFO from 'constants/appInfo';
import { useDebounce } from '@snappmarket/hooks';
import { Button, Input } from '@snappmarket/ui';

import { loadingActions, mapActions, mapSelectors } from 'ducks';
// import useDebounce from 'constants/Hooks/useDebounce';
// import Button from 'components/Global/Button';
// import Input from 'components/Global/Input';

import mapMessages from 'constants/Messages/map.messages';
import { context as mapContext } from '../../context/mapContext';

import {
  StyledSearchFormContainer,
  StyledSearchResultContainer,
} from './styles';

const SearchLocationForm = props => {
  const [typing, setTyping] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchTerm, cancelDebounce] = useDebounce(searchQuery, 300);
  const { position, setPosition, onLocationChange } = useContext(mapContext);
  const holderRef = createRef();
  const {
    gettingSearchLocationStatus,
    locations,
    searchLocation,
    clearLoadingStatus,
  } = props;
  const loading = gettingSearchLocationStatus === APP_INFO.API_STATUSES.REQUEST;

  /**
   * Handle canceling menu show
   */
  useEffect(() => {
    const handleOutsideClick = e => {
      if (!holderRef.current && !holderRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [holderRef]);

  /**
   * Call api based on debounced value
   */
  useEffect(() => {
    setTyping(false);
    if (debouncedSearchTerm.length > 0) {
      searchLocation({
        searchQuery: debouncedSearchTerm,
        ...position,
        type: 'Point',
      });
    }
  }, [debouncedSearchTerm, searchLocation]);

  /**
   * Set menu open flag
   */
  useEffect(() => {
    if (
      !menuOpen &&
      locations.length > 0 &&
      gettingSearchLocationStatus === APP_INFO.API_STATUSES.SUCCESS
    ) {
      setMenuOpen(true);
    }
  }, [locations, menuOpen]);

  /**
   * Set menu to close on mount
   */
  useEffect(() => {
    setMenuOpen(false);
  }, []);

  const handleSubmitForm = e => {
    e.preventDefault();
    searchLocation({
      searchQuery,
      ...position,
      type: 'Point',
    });
    cancelDebounce();
  };

  const handleSearchQueryChange = e => {
    setSearchQuery(e.target.value);
    setTyping(true);
  };

  const handleItemClick = location => {
    const { lat, lng, address } = location;

    setSearchQuery('');
    clearLoadingStatus(mapActions.searchLocationRequest());
    setMenuOpen(false);
    setPosition({ lat, lng });
    onLocationChange({ lat, lng, address });
  };

  const handleEnterPress = e => {
    if (e.which === 13 || e.keyCode === 13) {
      handleSubmitForm(e);
    }
  };

  return (
    <div ref={holderRef}>
      <StyledSearchFormContainer>
        <Input
          placeholder={mapMessages.map.placeholders.searchLocation}
          name="searchQuery"
          value={searchQuery}
          onChange={handleSearchQueryChange}
          onKeyPress={handleEnterPress}
          autoComplete="off"
        />
        <Button
          type="button"
          className={`p-1 ${loading ? 'spinner' : ''}`}
          onClick={handleSubmitForm}
          icon={loading ? 'spinner spin' : 'search'}
          modifier="link"
          disabled={typing}
        />
      </StyledSearchFormContainer>
      {!typing && menuOpen && locations && locations.length ? (
        <StyledSearchResultContainer>
          <ul>
            {locations.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={`${item.address}_${index}`}>
                <Button
                  modifier="link"
                  type="button"
                  className="p-1 text-right"
                  title={
                    <>
                      <span>{item.address}</span>
                      <small className="pr-1">{item.city}</small>
                    </>
                  }
                  onClick={() => {
                    handleItemClick(item);
                  }}
                />
              </li>
            ))}
          </ul>
        </StyledSearchResultContainer>
      ) : (
        ''
      )}
    </div>
  );
};

SearchLocationForm.propTypes = {
  gettingSearchLocationStatus: PropTypes.string,
  locations: PropTypes.array,
  searchLocation: PropTypes.func,
  clearLoadingStatus: PropTypes.func,
};

const mapStateToProps = state => ({
  gettingSearchLocationStatus: mapSelectors.getGettingSearchLocationStatus(
    state,
  ),
  locations: mapSelectors.getLocations(state),
});

export default connect(mapStateToProps, {
  searchLocation: mapActions.searchLocationRequest,
  clearLoadingStatus: loadingActions.clearOne,
})(SearchLocationForm);
