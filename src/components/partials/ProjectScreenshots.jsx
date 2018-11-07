import PropTypes from 'prop-types'
import React from 'react'
import Image from 'gatsby-image'
import Carousel from './Carousel'
import { CarouselWrap, BrowserWindow, Box, Container } from '../ui'

function ProjectScreenshots ({
    projectScreenshots,
    projectUid,
    projectType,
}) {
    if (!projectScreenshots[0]) {
        return null
    }

    const carouselItems = projectScreenshots.map((carouselItem, index) => {
        const carouselImage = carouselItem.screenshot.localFile.childImageSharp.fluid
        const key = `${ projectUid }-${ index }`

        return (
            <div key={ key }>
                { projectType !== 'app' && (
                    <BrowserWindow>
                        <div
                            className="controls"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </BrowserWindow>
                ) }
                <Image
                    fluid={ carouselImage }
                />
            </div>
        )
    })

    return (
        <Box
            position="relative"
            zIndex={ 1 }
            mt={ 6 }
            pb={ 6 }
        >
            <Container>
                <CarouselWrap>
                    <Carousel
                        items={ carouselItems }
                        initialSlide={ 0 }
                    />
                </CarouselWrap>
            </Container>
        </Box>
    )
}

ProjectScreenshots.defaultProps = {
    projectScreenshots: null,
    projectUid: null,
    projectType: null,
}

ProjectScreenshots.propTypes = {
    projectScreenshots: PropTypes.array,
    projectUid: PropTypes.string,
    projectType: PropTypes.string,
}

export default ProjectScreenshots
