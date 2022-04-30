import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import withLayout from '../components/hoc/withLayout'
import { Box, Container, Contained } from '../components/ui'
import MyIntro from '../components/partials/MyIntro'
import MyInfo from '../components/partials/MyInfo'
import MySkills from '../components/partials/MySkills'

const AboutPage = ({ data }) => {
  const globalContent = data.global.edges[0].node.data

  if (!globalContent) {
    return null
  }

  const meImage = globalContent.about_me_image.gatsbyImageData

  const {
    me_intro_title,
    me_intro_text,
    me_skills_title,
    me_skills_text,
  } = globalContent

  const pageName = 'about'

  return (
    <Box
      id={`${pageName}-page`}
      pb={5}
    >
      <Container>
        <Contained
          maxWidth={3}
        >
          <Box
            mt={[25, 15, 10]}
            mb={5}
          >
            <GatsbyImage
              image={meImage}
            />
          </Box>
          <MyIntro
            meIntroTitle={me_intro_title}
            meIntroText={me_intro_text}
            sectionName={pageName}
          />
          <MySkills
            meSkillsTitle={me_skills_title}
            meSkillsText={me_skills_text}
            sectionName={pageName}
          />
          <Box mb={5}>
            <MyInfo />
          </Box>
        </Contained>
      </Container>
    </Box>
  )
}

export default withLayout(AboutPage)

export const pageQuery = graphql`
  query AboutQuery {
    global: allPrismicGlobal {
      edges {
        node {
          uid
          data {
            first_name {
              text
            }
            surname {
              text
            }
            me_intro_title {
              text
            }
            me_intro_text {
              html
            }
            me_skills_title {
              text
            }
            me_skills_text {
              html
            }
            about_me_image {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`