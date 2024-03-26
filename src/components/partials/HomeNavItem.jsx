import React from 'react'
import { Link } from 'gatsby'
import SunIcon from '../ui/icons/SunIcon'
import { Box, SvgWrap, Text } from '../ui'

function HomeNavItem() {
  return (
    <Box mx="auto" width={45}>
      <Text as={Link} fontSize="0px" to="/">
        <SvgWrap color="primary">
          <SunIcon />
        </SvgWrap>
      </Text>
    </Box>
  )
}

export default HomeNavItem
