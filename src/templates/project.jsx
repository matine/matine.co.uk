import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Helmet from 'react-helmet'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import config from '../../config/website'
import { useThemeSwitchContext } from '../context/ThemeSwitchContext'
import ProjectTextContent from '../components/partials/ProjectTextContent'
import ProjectImagesInsitu from '../components/partials/ProjectImagesInsitu'
import ProjectScreenshots from '../components/partials/ProjectScreenshots'
import ProjectPrevNext from '../components/partials/ProjectPrevNext'
import SEO from '../components/partials/SEO'
import PageLayout from '../components/partials/PageLayout'
import { ThemeDefault, Box, BannerOverlay } from '../components/ui'
import { colors } from '../components/ui/theme'

function ProjectTemplate({ data }) {
  const projectNode = data.prismicProject
  const projectContent = projectNode.data
  const projectUid = projectNode.uid
  const allProjectsContent = data.projects.edges

  const {
    project_title,
    project_main_text,
    project_role,
    project_tech_stack,
    project_visit_website_link,
    project_type,
    project_banner,
    project_imac,
    project_ipad,
    project_iphone,
    project_screenshots,
  } = projectContent

  const projectBanner = project_banner?.gatsbyImageData
  const pageName = 'project'

  const {
    setTheme,
  } = useThemeSwitchContext()

  useEffect(() => {
    setTheme('default')
  }, [])

  return (
    <PageLayout>
      <ParallaxProvider>
        <Helmet title={`${project_title} | ${config.siteTitle}`} />
        <SEO projectNode={projectNode} projectPath={projectUid} projectSEO />
        <div id={`${pageName}-page`}>
          <Parallax speed={-10}>
            {project_banner && (
              <Box height={[260, 260, 260, 330]} mt={[-60, -60, -60, -30]}>
                <GatsbyImage
                  style={{ 'width': '100%', 'height' : '100%' }}
                  image={projectBanner}
                  alt="banner"
                  objectFit="cover"
                />
              </Box>
            )}
          </Parallax>
          <ThemeDefault themeBg position="relative" zIndex={2} height="100%">
            <BannerOverlay />
            <ProjectTextContent
              projectTitle={project_title}
              projectMainText={project_main_text}
              projectRole={project_role}
              projectTechStack={project_tech_stack}
              projectVisitWebsiteLink={project_visit_website_link}
              projectType={project_type}
            />
            <Box
              mt={500}
              bg={[
                colors.transparent,
                colors.transparent,
                colors.transparent,
                colors.gray[3],
              ]}
            >
              <ProjectImagesInsitu
                projectImac={project_imac}
                projectIpad={project_ipad}
                projectIphone={project_iphone}
                projectTitle={project_title}
              />
              <ProjectScreenshots
                projectScreenshots={project_screenshots}
                projectUid={projectUid}
                projectType={project_type}
                projectTitle={project_title}
              />
              <ProjectPrevNext
                projectsContent={allProjectsContent}
                currentProjectUid={projectUid}
              />
            </Box>
          </ThemeDefault>
        </div>
      </ParallaxProvider>
    </PageLayout>
  )
}

export default ProjectTemplate

export const pageQuery = graphql`
  query ProjectBySlug($uid: String!) {
    projects: allPrismicProject(
      sort: { fields: [data___project_order], order: DESC }
    ) {
      edges {
        node {
          uid
          data {
            project_title {
              text
            }
          }
        }
      }
    }
    prismicProject(uid: { eq: $uid }) {
      uid
      first_publication_date
      last_publication_date
      data {
        project_title {
          text
        }
        project_role {
          text
        }
        project_tech_stack {
          text
        }
        project_type
        project_visit_website_link {
          url
        }
        project_main_text {
          html
        }
        project_banner {
          gatsbyImageData
        }
        project_imac {
          gatsbyImageData
        }
        project_ipad {
          gatsbyImageData
        }
        project_iphone {
          gatsbyImageData
        }
        project_screenshots {
          screenshot {
            gatsbyImageData
          }
        }
      }
    }
  }
`
