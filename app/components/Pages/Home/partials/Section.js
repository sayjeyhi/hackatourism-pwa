import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledHomeItemsColumn } from '../styles';

const Section = ({ icon: Icon, title, route, description, ...rest }) => (
  <StyledHomeItemsColumn {...rest}>
    <NavLink className="align-center justify-center flex-column" to={route}>
      <div className="section-icon">
        <Icon />
      </div>
      <div className="section-title">
        {title}
        {description ? (
          <div className="section-description">{description}</div>
        ) : null}
      </div>
    </NavLink>
  </StyledHomeItemsColumn>
);

Section.defaultProps = {
  description: '',
};

export default Section;
