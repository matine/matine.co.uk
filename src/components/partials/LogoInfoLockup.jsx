import React, { Fragment } from 'react'
import { Box, Heading, SvgWrap, TextXs, Span } from '../ui'
import SunIcon from '../ui/icons/SunIcon'
import { PropTypeGatsbyText } from '../../propTypes'

const LogoInfoLockup = ({ firstName, surname }) => {
  return (
    <>
      <Heading fontSize={[40, 40, 50]} mb={2} ml={-1} lineHeight={0.85} caps>
        <Box position="relative" display="inline-block">
          <Box
            display="inline-block"
            position="absolute"
            top={['-35px', '-35px', '-43px']}
            left="36%"
          >
            <SvgWrap color="primary" width={[40, 40, 50]}>
              <SunIcon />
            </SvgWrap>
          </Box>
          {firstName.text}&nbsp;
        </Box>
        <Span display={['block', 'inline-block']}>{surname.text}</Span>
      </Heading>
      <TextXs pb={1} caps>
        <Span fontWeight="bold" display={['block', 'inline-block']}>
          Frontend developer
        </Span>
        <Span display={['none', 'inline-block']}>&nbsp;→&nbsp;</Span>
        <Span display={['block', 'inline-block']}>
          <a href="http://matine.co.uk">matine.co.uk</a>
        </Span>
        <Span display={['none', 'inline-block']}>&nbsp;→&nbsp;</Span>
        <Span display={['block', 'inline-block']}>
          <a href="mailto:matine.chabrier@gmail.com">
            matine.chabrier@gmail.com
          </a>
        </Span>
      </TextXs>
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
