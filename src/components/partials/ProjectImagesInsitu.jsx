import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Container, Box, TouchDevices, Imac, Ipad, Iphone } from '../ui'

function ProjectImagesInsitu({
  projectImac = null,
  projectIpad = null,
  projectIphone = null,
  projectTitle = '',
}) {
  const imac = projectImac?.gatsbyImageData
  const ipad = projectIpad?.gatsbyImageData
  const iphone = projectIphone?.gatsbyImageData

  const ipadImage = ipad && (
    <Ipad>
      <GatsbyImage image={ipad} alt={`${projectTitle}-ipad`} />
    </Ipad>
  )
  const iphoneImage = iphone && (
    <Iphone>
      <GatsbyImage image={iphone} alt={`${projectTitle}-iphone`} />
    </Iphone>
  )
  const imacImage = imac && (
    <Imac>
      <GatsbyImage image={imac} alt={`${projectTitle}-imac`} />
    </Imac>
  )

  return (
    <Box position="relative" bottom={-130}>
      <Container>
        {imacImage}
        <TouchDevices>
          {ipadImage}
          {iphoneImage}
        </TouchDevices>
      </Container>
    </Box>
  )
}

export default ProjectImagesInsitu
