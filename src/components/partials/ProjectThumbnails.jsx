import React from 'react'
import { Link } from 'gatsby'
import { useDispatch } from 'react-redux'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Box, ProjectThumbnail, ThemeDefault, Col, Fixed, Flex, Heading } from '../../components/ui'

const ProjectThumbnails = ({ projectData }) => {
  const dispatch = useDispatch()
  const projects = projectData.projects.edges

  return (
    <>
      {projects.map(({ node: { uid, data } }) => (
        <Col
          key={uid}
          width={[ 1, 1, 1, 1 / 3 ]}
        >
          <ThemeDefault
            themeProjectThumbnails
          >
            <ProjectThumbnail className="project-thumbnail">
              <Link to={`/work/${uid}`}>
                <Box
                  className="project-thumbnail__images"
                  position="relative"
                  zIndex={1}
                >
                  <GatsbyImage
                    image={getImage(data.project_thumbnail.gatsbyImageData)}
                  />
                  <Box
                    className="project-thumbnail__image2"
                    position="absolute"
                    top={0}
                    left={0}
                    width={1}
                  >
                  <GatsbyImage
                    image={getImage(data.project_thumbnail_2.gatsbyImageData)}
                  />
                  </Box>
                </Box>
                <Fixed
                  className="project-thumbnail__hover"
                  width={1}
                  height="100%"
                >
                  <Box
                    width={1}
                    position="absolute"
                    bottom={0}
                    left={0}
                  >
                    <Box
                      width="100%"
                      pt="22.66%"
                    >
                      <Fixed
                        px={ 2 }
                      >
                        <Flex
                          flex={1}
                          alignItems="center"
                          justifyContent="center"
                          height="100%"
                        >
                          <Heading
                            caps
                            fontSize={[16, 18, 22, 16, 20]}
                            mb={ 0 }
                            pb={ 0 }
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
