import React, { Fragment } from 'react';
import { Box, Heading, SvgWrap, TextXs, Span } from '../ui';
import SunIcon from '../ui/icons/SunIcon';
import { PropTypeGatsbyText } from '../../propTypes';

function LogoInfoLockup({
    firstName,
    surname,
}) {
    return (
        <Fragment>
            <Heading
                fontSize={ [40, 40, 50] }
                mb={ 2 }
                ml={ -1 }
                lineHeight={ .85 }
                caps
            >
            <Box
                position="relative"
                display="inline-block"
            >
                <Box
                    display="inline-block"
                    position="absolute"
                    top={['-35px', '-35px', '-43px',]}
                    left="36%"
                >
                    <SvgWrap
                        color="primary"
                        width={[40, 40, 50]}
                    >
                        <SunIcon />
                    </SvgWrap>
                </Box>
                { firstName.text }&nbsp;
            </Box>
            <span>{ surname.text }</span>
        </Heading>
        <TextXs
            pb={ 1 }
            caps
        >
            <Span
                fontWeight="bold"
            >
                Frontend developer
            </Span>
            &nbsp;→&nbsp;
            <Span>
                <a
                    href="http://matine.co.uk"
                >
                    matine.co.uk
                </a>
                &nbsp;→&nbsp;
                <Span>
                    <a
                        href="mailto:matine.chabrier@gmail.com"
                    >
                        matine.chabrier@gmail.com
                    </a>
                </Span>
            </Span>
        </TextXs>
    </Fragment>
    );
}

LogoInfoLockup.defaultProps = {
    firstName: null,
    surname: null,
};

LogoInfoLockup.propTypes = {
    firstName: PropTypeGatsbyText,
    surname: PropTypeGatsbyText,
};

export default LogoInfoLockup;