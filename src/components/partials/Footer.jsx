import React from 'react'
import * as Scroll from 'react-scroll'
import { graphql, StaticQuery } from 'gatsby'
import SocialLinks from './SocialLinks'
import { ThemeInverted, TextWrap, Box, Container, TextWrapMd, ButtonHover, Text, TextMd } from '../ui'

const scroll = Scroll.animateScroll

const Footer = ({
    data,
}) => {
    const globalContent = data.global.edges[0].node.data
    const footerText = globalContent.footer_text

    return (
        <ThemeInverted
            id="footer"
            className="hide-for-print"
            themeBg
            themeColor
            themeSvg
            themeLinks
            width={ 1 }
            position="fixed"
            bottom={ 0 }
            left={ 0 }
            zIndex={ 0 }
            py={ [4, 4, 5] }
        >
            <Container>
                <TextWrapMd
                    textAlign="center"
                    linkStyle="default"
                >
                    <Box
                        mb={ 4 }
                    >
                        <ButtonHover
                            onClick={ scroll.scrollToTop }
                            hover="arrow"
                        >
                            <Text
                                fontSize={ 28 }
                                className="arrow"
                                pb={ 0 }
                                mb="0px"
                            >
                                &uarr;
                            </Text>
                            <TextMd
                                fontWeight="bold"
                            >
                                Up
                            </TextMd>
                        </ButtonHover>
                    </Box>
                    { footerText &&
                        <TextWrap
                            textSpacing
                        >
                            <Box
                                mb={ 4 }
                            >
                                <div
                                    dangerouslySetInnerHTML={
                                        {
                                            __html: footerText.html,
                                        }
                                    }
                                />
                            </Box>
                        </TextWrap>
                    }
                    <TextWrap
                        linkStyle="none"
                    >
                        <SocialLinks
                            linkedIn
                            twitter
                            email
                            gitHub
                        />
                    </TextWrap>
                </TextWrapMd>
            </Container>
        </ThemeInverted>
    )
}

export default props => (
    <StaticQuery
        query={ graphql`
            query {
                global: allPrismicGlobal(sort: { fields: [last_publication_date], order: DESC }) {
                    edges {
                        node {
                            uid
                            data {
                                footer_text {
                                    html
                                }
                            }
                        }
                    }
                }
            }
        `}
        render={ data => <Footer data={ data } { ...props } /> }
    />
)
