import React from 'react'
import { graphql } from 'gatsby'
import { Span, Container, Grid, PageHeading } from '../components/ui'
import PageLayout from '../components/partials/PageLayout'
import Links from '../components/partials/Links'

const LinksPage = ({ data }) => {
  const globalContent = data.global.edges[0].node.data

  if (!globalContent) {
    return null
  }

  const pageName = 'links'

  return (
    <PageLayout>
      <Container id={`${pageName}-page`} pb={5}>
        <PageHeading>
          {globalContent.links_title.text}
          <br />
          <Span fontWeight="100">{globalContent.links_subtitle.text}</Span>
        </PageHeading>
        <Grid>
          <Links data={globalContent.body} />
        </Grid>
      </Container>
    </PageLayout>
  )
}

export default LinksPage

export const pageQuery = graphql`
  query LinksQuery {
    global: allPrismicGlobal {
      edges {
        node {
          data {
            links_title {
              text
            }
            links_subtitle {
              text
            }
            body {
              ... on PrismicGlobalDataBodyLinks {
                id
                primary {
                  list_of_links_title {
                    text
                  }
                }
                slice_type
                items {
                  link_description {
                    html
                  }
                  link_name
                  link_url {
                    raw
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
