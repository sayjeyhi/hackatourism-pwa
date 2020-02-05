import React from 'react';
import { useParams } from 'react-router-dom';
import SeoHead from 'components/Common/Seo/SeoHead';

const Search = () => {
  const { term } = useParams();
  return (
    <>
      <SeoHead title={term} />
      SEARCH PAGE
    </>
  );
};

// Search.fetchData = (props, location) => {
//   const { getProductsAndFilters } = props;
//   const {
//     params: { term },
//     query,
//   } = location;
//   getProductsAndFilters({
//     term,
//     ...query,
//   });
// };

export default Search;
