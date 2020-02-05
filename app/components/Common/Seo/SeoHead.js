import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import APP_INFO from 'constants/appInfo';
import favicon from 'resources/img/favicon.ico';

const SeoHead = ({
  title,
  description,
  keywords,
  image,
  canonical,
  children,
}) => (
  <Helmet>
    <title>{title ? `${title} | ${APP_INFO.NAME}` : APP_INFO.NAME}</title>

    <meta charSet="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="description" content={description} />
    <link rel="icon" href={favicon} type="image/x-icon" />

    {keywords && <meta name="keywords" content={keywords.join(',')} />}

    {canonical && <link rel="canonical" />}

    <meta property="og:image" content={image || '/defaultImage.jpg'} />
    <meta property="og:title" content={title} />
    <meta property="og:site_name" content={APP_INFO.NAME} />
    <meta property="og:url" content={APP_INFO.URL} />

    {children}
  </Helmet>
);

SeoHead.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.array,
  image: PropTypes.string,
  canonical: PropTypes.string,
  children: PropTypes.string,
};

export default SeoHead;
