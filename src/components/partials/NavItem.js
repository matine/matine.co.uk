import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const NavItem = ({
    ...props
}) => <NavLink { ...props } activeClassName="active"/>;

NavItem.propTypes = {
    to: PropTypes.string.isRequired,
};

export default NavItem;
