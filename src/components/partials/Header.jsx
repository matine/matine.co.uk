import React from 'react'
import PropTypes from 'prop-types'
import NavItem from './NavItem'
import HomeNavItem from './HomeNavItem'
import { ThemeDefault, Box, NavWrap } from '../ui'

function Header({ pageName }) {
  return (
    <Box className="hide-for-print">
      <Box position="fixed" width={1} top={0} left={0} zIndex={99}>
        <ThemeDefault themeBg themeBorder themeSvg>
          <Box
            display="flex"
            px={4}
            minHeight={[65, 70]}
            w={1}
            alignItems="center"
            justifyContent="center"
          >
            <Box
              display="grid"
              gridTemplateColumns="1fr 1fr 1fr"
              width={1}
              alignItems="center"
            >
              <Box gridColumn={2}>{pageName !== 'home' && <HomeNavItem />}</Box>
              <NavWrap>
                <Box
                  display="flex"
                  justifyContent="flex-end"
                  gridGap={3}
                  gridColumn={3}
                >
                  <NavItem to="/about">About</NavItem>
                  <NavItem to="/cv">CV</NavItem>
                </Box>
              </NavWrap>
            </Box>
          </Box>
        </ThemeDefault>
      </Box>
    </Box>
  )
}

Header.propTypes = {
  pageName: PropTypes.string,
}

export default Header
