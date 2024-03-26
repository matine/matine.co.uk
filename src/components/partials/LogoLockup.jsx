import React from 'react'
import { Heading, SvgWrap, Box } from '../ui'
import SunIcon from '../ui/icons/SunIcon'
import { PropTypeGatsbyText } from '../../propTypes'

function LogoLockup({ firstName, surname }) {
  return (
    <Heading
      fontSize={[46, 60, 70]}
      textAlign="center"
      lineHeight={0.85}
      mb={0}
      mt={[5, 6, 6, 4]}
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <SvgWrap color="primary" fontSize={0} width={[46, 80, 86]}>
          <SunIcon />
        </SvgWrap>
        {firstName.text}
        <br />
        <span>{surname.text}</span>
      </Box>
    </Heading>
  )
}

LogoLockup.defaultProps = {
  firstName: null,
  surname: null,
}

LogoLockup.propTypes = {
  firstName: PropTypeGatsbyText,
  surname: PropTypeGatsbyText,
}

export default LogoLockup
