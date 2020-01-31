import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import routes from 'components/Common/Router/routes';
import {
  GithubIcon,
  TwitterIcon,
  InstagramIcon,
  MediumIcon,
  OpenSourceIcon,
} from 'resources/svg/Icons/Social';
import { StyledFooter, StyledFooterSocials } from './styles';

const Footer = props => (
  <StyledFooter className="align-center justify-center">
    <ul>
      <li>
        <NavLink to={routes.info.rules}>شرایط استفاده</NavLink>
      </li>
      <li>
        <NavLink to={routes.info.faq}>سوالات متداول</NavLink>
      </li>
      <li>
        <NavLink to={routes.info.privacyPolicy}>حریم خصوصی</NavLink>
      </li>
      <li>
        <NavLink to={routes.info.about}>درباره‌ما</NavLink>
      </li>
    </ul>
    <StyledFooterSocials className="mt-1">
      <a className="twitter" href="#" target="_blank">
        <TwitterIcon />
      </a>
      <a className="github" href="#" target="_blank">
        <GithubIcon />
      </a>
      <a className="instagram" href="#" target="_blank">
        <InstagramIcon />
      </a>
      <a className="medium" href="#" target="_blank">
        <MediumIcon />
      </a>
      <a className="open-source" href="#" target="_blank">
        <OpenSourceIcon />
      </a>
    </StyledFooterSocials>
    <div className="copyright">
      {' '}
      تمامی حقوق برای پلتفرم هوشمند گردشگری کوله پشتی محفوظ می‌باشد
    </div>
  </StyledFooter>
);

Footer.propTypes = {
  showTop: PropTypes.bool,
};

Footer.defaultProps = {
  showTop: true,
};

export default Footer;
