import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledHomeItemsColumn } from '../../styles';

const HomeSection = ({ icon: Icon, title, route, description, ...rest }) => (
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

HomeSection.defaultProps = {
  description: '',
};

export default HomeSection;
