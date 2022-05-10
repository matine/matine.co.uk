import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useThemeSwitchContext } from '../../context/ThemeSwitchContext'
import {
  Box,
  ProjectThumbnail,
  ThemeDefault,
  Col,
  Fixed,
  Flex,
  Heading,
} from '../ui'

const ProjectThumbnails = ({ projectData }) => {
  const projects = projectData.projects.edges

  const {
    setTheme,
  } = useThemeSwitchContext()

  return (
    <>
      {projects.map(({ node: { uid, data } }) => (
        <Col
          key={uid}
          width={[1, 1, 1, 1 / 3]}
          maxWidth="700px"
          onMouseOver={() => setTheme('inverted')}
          onMouseOut={() => setTheme('default')}
        >
          <ThemeDefault themeProjectThumbnails>
            <ProjectThumbnail className="project-thumbnail">
              <Link to={`/work/${uid}`}>
                <Box
                  className="project-thumbnail__images"
                  position="relative"
                  zIndex={1}
                >
                  <GatsbyImage
                    className="project-thumbnail__gatsby-image"
                    objectFit="contain"
                    image={getImage(data.project_thumbnail.gatsbyImageData)}
                    alt={`${data.project_title.text}-thumbnail-1`}
                  />
                  <Box
                    className="project-thumbnail__image2"
                    position="absolute"
                    top={0}
                    left={0}
                    width={1}
                  >
                    <GatsbyImage
                      className="project-thumbnail__gatsby-image"
                      objectFit="contain"
                      image={getImage(data.project_thumbnail_2.gatsbyImageData)}
                      alt={`${data.project_title.text}-thumbnail-2`}
                    />
                  </Box>
                </Box>
                <Fixed
                  className="project-thumbnail__hover"
                  width={1}
                  height="100%"
                >
                  <Box width={1} position="absolute" bottom={0} left={0}>
                    <Box width="100%" pt="22.66%">
                      <Fixed px={2}>
                        <Flex
                          flex={1}
                          alignItems="center"
                          justifyContent="center"
                          height="100%"
                        >
                          <Heading
                            caps
                            fontSize={[16, 18, 22, 16, 20]}
                            mb={0}
                            pb={0}
                            fontWeight="bold"
                            textAlign="center"
                          >
                            {data.project_title.text}
                          </Heading>
                        </Flex>
                      </Fixed>
                    </Box>
                  </Box>
                </Fixed>
              </Link>
            </ProjectThumbnail>
          </ThemeDefault>
        </Col>
      ))}
    </>
  )
}

export default ProjectThumbnails
