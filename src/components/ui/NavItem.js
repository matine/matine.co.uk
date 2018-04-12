import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

class NavItem extends Component {
    /**
     * Renders the component.
     *
     * @return {XML}
     */
    render() {
        return <NavLink {...this.props} activeClassName="active"/>
    }
}

NavItem.propTypes = {
    to: PropTypes.string.isRequired,
};

export default NavItem;
