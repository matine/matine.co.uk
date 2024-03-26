import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { TextSm } from '../ui'

function NavItem({ children, ...props }) {
  return (
    <Link activeClassName="active" {...props}>
      <TextSm caps fontWeight={600}>
        {children}
      </TextSm>
    </Link>
  )
}

NavItem.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
}

export default NavItem
