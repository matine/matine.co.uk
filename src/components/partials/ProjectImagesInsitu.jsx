import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Container, Box, TouchDevices, Imac, Ipad, Iphone } from '../ui'
import { PropTypeGatsbyImage } from '../../propTypes'

function ProjectImagesInsitu ({
  projectImac = null,
  projectIpad = null,
  projectIphone = null,
}) {
  const imac = projectImac?.gatsbyImageData
  const ipad = projectIpad?.gatsbyImageData
  const iphone = projectIphone?.gatsbyImageData

  const ipadImage = ipad && (
    <Ipad>
      <GatsbyImage
        image={ipad}
      />
    </Ipad>
  )
  const iphoneImage = iphone && (
    <Iphone>
      <GatsbyImage
        image={iphone}
      />
    </Iphone>
  )
  const imacImage = imac && (
    <Imac>
      <GatsbyImage
        image={imac}
      />
    </Imac>
  )

  return (
    <Box
      position="relative"
      top={-500}
      mb={-500}
    >
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
