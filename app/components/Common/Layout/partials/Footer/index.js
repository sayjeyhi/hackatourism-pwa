import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import routes from 'components/Common/Router/routes';

import { StyledFooter } from './styles';

const Footer = props => (
  <>
    <ul>
      <li>
        <NavLink to={routes.info.rules}>شرایط استفاده</NavLink>
      </li>
      <li>
        <NavLink to={routes.info.about}>درباره‌ما</NavLink>
      </li>
      <li>
        <NavLink to={routes.info.faq}>سوالات متداول</NavLink>
      </li>
      <li>
        <NavLink to={routes.info.privacyPolicy}>حریم خصوصی</NavLink>
      </li>
    </ul>
    <StyledFooter>تمامی حقوق برای پلتفرم کوله پشتی محفوظ است</StyledFooter>
  </>
);

Footer.propTypes = {
  showTop: PropTypes.bool,
};

Footer.defaultProps = {
  showTop: true,
};

export default Footer;
