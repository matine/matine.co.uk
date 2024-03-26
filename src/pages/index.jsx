import React from 'react'
import { graphql } from 'gatsby'
import PageLayout from '../components/partials/PageLayout'
import LogoLockup from '../components/partials/LogoLockup'
import ProjectThumbnails from '../components/partials/ProjectThumbnails'
import { Container, Grid, Box, Text } from '../components/ui'

function IndexPage({ data }) {
  const globalContent = data.global.edges[0].node.data

  if (!globalContent) {
    return null
  }

  const { first_name, surname } = globalContent

  return (
    <PageLayout pageName="home">
      <div id="projects-page">
        <Container pb={5} maxWidth={1500}>
          <Box py={[5, 5, 6]}>
            <LogoLockup firstName={first_name} surname={surname} />
            <Text fontWeight="bold" textAlign="center" fontSize={[16, 20, 24]}>
              Frontend Engineer
            </Text>
          </Box>
          <Grid gutter={1}>
            <ProjectThumbnails projectData={data} />
          </Grid>
        </Container>
      </div>
    </PageLayout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    global: allPrismicGlobal {
      edges {
        node {
          data {
            surname {
              text
            }
            first_name {
              text
            }
          }
        }
      }
    }
    projects: allPrismicProject(
      sort: { fields: data___project_order, order: DESC }
    ) {
      edges {
        node {
          id
          uid
          data {
            project_title {
              text
            }
            project_thumbnail {
              gatsbyImageData(placeholder: BLURRED)
            }
            project_thumbnail_2 {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`
