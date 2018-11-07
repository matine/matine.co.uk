import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const NavItem = ({
    ...props
}) => <Link { ...props } activeClassName="active"/>

NavItem.propTypes = {
    to: PropTypes.string.isRequired,
}

export default NavItem
