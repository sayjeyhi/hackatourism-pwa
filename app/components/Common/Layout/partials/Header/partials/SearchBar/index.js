import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useHistory } from 'react-router-dom';

import { useDebounce } from '@snappmarket/hooks';

import Loading from 'components/Common/Loading';
import routes from 'components/Common/Router/routes';
import generalMessages from 'constants/Messages/general.messages';
import SearchIcon from 'resources/svg/Icons/SearchIcon';
import APP_INFO from 'constants/appInfo';
import { context as HeaderContext } from '../../context/headerContext';
import { StyledSearchBox, StyledSearchBoxHolder } from './styles';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchTerm] = useDebounce(searchQuery, 200);
  const { setVisiblePanel, setShowLightBox } = useContext(HeaderContext);
  const history = useHistory();

  const handleShowSearchBoxPanel = () => {
    setShowLightBox(true);
    setVisiblePanel('search');
  };
  const handleClearSearchBoxPanel = () => {
    setShowLightBox(false);
    setVisiblePanel(null);
  };

  const handleCloseSearchBoxPanel = () => {
    setSearchQuery('');
    handleClearSearchBoxPanel();
  };

  const handleSearchQueryChange = e => {
    setSearchQuery(e.target.value);
  };

  const getProductsListHandler = query => {
    console.log(query);
    // call api for search
  };

  const handleEnterPress = e => {
    if (e.which === 13 || e.keyCode === 13) {
      handleCloseSearchBoxPanel();
      history.push(`${routes.search.path}/${e.target.value}`);
    }
  };

  /**
   * Call api based on debounced value
   */
  useEffect(() => {
    if (debouncedSearchTerm.length > 0) {
      handleShowSearchBoxPanel();
      getProductsListHandler(debouncedSearchTerm);
    } else {
      handleCloseSearchBoxPanel();
    }
  }, [debouncedSearchTerm]);

  return (
    <StyledSearchBox opened={false}>
      <label suppressHydrationWarning>
        <input
          type="text"
          id="searchBox"
          name="searchBox"
          placeholder={generalMessages.header.searchBoxPlaceholder}
          value={searchQuery}
          onChange={handleSearchQueryChange}
          onKeyPress={handleEnterPress}
          autoComplete="off"
        />

        <NavLink
          onClick={handleCloseSearchBoxPanel}
          to={`${routes.search.path}/${searchQuery}`}
        >
          <SearchIcon />
        </NavLink>
      </label>
      <StyledSearchBoxHolder visible={false}>
        {'SUCCESS' === APP_INFO.API_STATUSES.SUCCESS ? (
          <>نتایج</>
        ) : (
          <>
            <Loading />
            <span>در حال جستجو</span>
          </>
        )}
      </StyledSearchBoxHolder>
    </StyledSearchBox>
  );
};

SearchBar.propTypes = {
  showSearchResult: PropTypes.bool,
  searchResult: PropTypes.object,
  getSearchResult: PropTypes.func,
  getSearchResultStatus: PropTypes.string,
  vendorCode: PropTypes.string,
};

SearchBar.defaultProps = {
  showSearchResult: false,
  searchResult: {},
  getSearchResult: f => f,
  getSearchResultStatus: '',
};

export default SearchBar;
