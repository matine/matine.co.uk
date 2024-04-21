import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import Carousel from './Carousel'
import { CarouselWrap, BrowserWindow, Box, Container } from '../ui'

function ProjectScreenshots({
  projectScreenshots,
  projectUid,
  projectType,
  projectTitle = '',
}) {
  if (!projectScreenshots[0]) {
    return null
  }

  const carouselItems = projectScreenshots.map((carouselItem, index) => {
    const carouselImage = carouselItem.screenshot.gatsbyImageData
    const key = `${projectUid}-${index}`

    return (
      <div key={key}>
        {projectType !== 'app' && (
          <BrowserWindow>
            <div className="controls">
              <span />
              <span />
              <span />
            </div>
          </BrowserWindow>
        )}
        <GatsbyImage image={carouselImage} alt={`${projectTitle}-${index}`} />
      </div>
    )
  })

  return (
    <Box position="relative" zIndex={1} mt={6} pb={6}>
      <Container>
        <CarouselWrap>
          <Carousel items={carouselItems} initialSlide={0} />
        </CarouselWrap>
      </Container>
    </Box>
  )
}

export default ProjectScreenshots
