import React from 'react'
import { Box, Heading, SvgWrap } from '../ui'
import SunIcon from '../ui/icons/SunIcon'
import { PropTypeGatsbyText } from '../../propTypes'

function LogoLockup ({
    firstName,
    surname,
}) {
    return (
        <Heading
            caps
            fontSize={[46, 46, 90]}
            textAlign="center"
            lineHeight={ 0.85 }
            mb={[3, 3, 4]}
        >
            <Box
                display="inline-block"
                position="relative"
            >
                <Box
                    display="inline-block"
                    position="absolute"
                    top={['-38px', '-38px', '-75px']}
                    left="39%"
                >
                    <SvgWrap
                        color="primary"
                        width={[46, 46, 90]}
                    >
                        <SunIcon />
                    </SvgWrap>
                </Box>
                { firstName.text }
            </Box>
            <br/>
            <span>
                { surname.text }
            </span>
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
