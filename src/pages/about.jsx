import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Box, Container, Contained } from '../components/ui'
import PageLayout from '../components/partials/PageLayout'
import MyIntro from '../components/partials/MyIntro'
import MyInfo from '../components/partials/MyInfo'
import MySkills from '../components/partials/MySkills'

function AboutPage({ data }) {
  const globalContent = data.global.edges[0].node.data

  if (!globalContent) {
    return null
  }

  const meImage = globalContent.about_me_image.gatsbyImageData

  const { me_intro_title, me_intro_text, me_skills_title, me_skills_text } =
    globalContent

  const pageName = 'about'

  return (
    <PageLayout>
      <Box id={`${pageName}-page`} pb={5}>
        <Container>
          <Contained maxWidth={3}>
            <Box display="flex" justifyContent="center">
              <Box
                maxWidth="310px"
                mt={96}
                mb={5}
                borderRadius="50%"
                overflow="hidden"
              >
                <GatsbyImage image={meImage} alt="photo-of-matine" />
              </Box>
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
    </PageLayout>
  )
}

export default AboutPage

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
