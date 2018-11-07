import React from 'react'
import Weather from './Weather'
import Nav from './Nav'
import SocialLinks from './SocialLinks'
import { ThemeDefault, Box, Grid, Col, TextWrap } from '../ui'

function Header () {
    return (
        <Box
            className="hide-for-print"
            position="fixed"
            width={ 1 }
            top={ 0 }
            left={ 0 }
            zIndex={ 99 }
        >
            <ThemeDefault
                themeBg
                themeBorder
                themeSvg
                py={ 2 }
                px={ 3 }
                minHeight={ [65, 70] }
            >
                <Grid
                    gutterY={ 0 }
                >
                    <Col
                        width={[1, 1, 1 / 3]}
                        display={['none', 'none', 'none', 'block']}
                    >
                        <Weather />
                    </Col>
                    <Col
                        width={[1, 1, 1, 1 / 3]}
                    >
                        <TextWrap
                            textAlign="center"
                        >
                            <Nav />
                        </TextWrap>
                    </Col>
                    <Col
                        width={[ 1, 1, 1 / 3 ]}
                        display={['none', 'none', 'none', 'block']}
                    >
                        <TextWrap
                            linkStyle="none"
                            textAlign="right"
                            pt={ 1 }
                        >
                            <SocialLinks
                                linkedIn
                                email
                                gitHub
                            />
                        </TextWrap>
                    </Col>
                </Grid>
            </ThemeDefault>
        </Box>
    )
}

export default Header
