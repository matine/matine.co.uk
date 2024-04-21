import React from 'react'
import * as Scroll from 'react-scroll'
import { graphql, StaticQuery } from 'gatsby'
import SocialLinks from './SocialLinks'
import {
  ThemeInverted,
  TextWrap,
  Box,
  Container,
  TextWrapMd,
  ButtonHover,
  Text,
  TextMd,
} from '../ui'

const scroll = Scroll.animateScroll

function Footer({ data }) {
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
      width={1}
      py={[4, 4, 5]}
    >
      <Container>
        <TextWrapMd textAlign="center" linkStyle="default">
          <TextWrap linkStyle="none">
            <SocialLinks linkedIn email gitHub cv />
          </TextWrap>
        </TextWrapMd>
      </Container>
    </ThemeInverted>
  )
}

export default function (props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          global: allPrismicGlobal(
            sort: { fields: [last_publication_date], order: DESC }
          ) {
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
      render={(data) => <Footer data={data} {...props} />}
    />
  )
}
