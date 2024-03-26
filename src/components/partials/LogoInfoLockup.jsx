import React from 'react'
import { Box, Heading, TextMd, Span } from '../ui'
import { PropTypeGatsbyText } from '../../propTypes'

function LogoInfoLockup({ firstName, surname }) {
  return (
    <>
      <Heading fontSize={[40, 40, 50]} mb={2} ml={-1} lineHeight={0.85}>
        <Box position="relative" display="inline-block">
          {firstName.text}&nbsp;
        </Box>
        <Span display={['block', 'inline-block']}>{surname.text}</Span>
      </Heading>
      <TextMd pb={1}>
        <Span fontWeight="bold" display={['block', 'inline-block']}>
          Frontend Engineer
        </Span>
        <Span display={['none', 'inline-block']}>&nbsp;|&nbsp;</Span>
        <Span display={['block', 'inline-block']}>
          <a href="http://matine.co.uk">matine.co.uk</a>
        </Span>
        <Span display={['none', 'inline-block']}>&nbsp;|&nbsp;</Span>
        <Span display={['block', 'inline-block']}>
          <a href="mailto:matine.chabrier@gmail.com">
            matine.chabrier@gmail.com
          </a>
        </Span>
      </TextMd>
    </>
  )
}

LogoInfoLockup.defaultProps = {
  firstName: null,
  surname: null,
}

LogoInfoLockup.propTypes = {
  firstName: PropTypeGatsbyText,
  surname: PropTypeGatsbyText,
}

export default LogoInfoLockup
