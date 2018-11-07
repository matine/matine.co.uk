import React from 'react'
import Image from 'gatsby-image'
import { Container, Box, TouchDevices, Imac, Ipad, Iphone } from '../ui'
import { PropTypeGatsbyImage } from '../../propTypes'

function ProjectImagesInsitu ({
    projectImac,
    projectIpad,
    projectIphone,
}) {
    const imac = projectImac.localFile && projectImac.localFile.childImageSharp.fluid
    const ipad = projectIpad.localFile && projectIpad.localFile.childImageSharp.fluid
    const iphone = projectIphone.localFile && projectIphone.localFile.childImageSharp.fluid

    const ipadImage = ipad && (
        <Ipad>
            <Image
                fluid={ ipad }
            />
        </Ipad>
    )
    const iphoneImage = iphone && (
        <Iphone>
            <Image
                fluid={ iphone }
            />
        </Iphone>
    )
    const imacImage = imac && (
        <Imac>
            <Image
                fluid={ imac }
            />
        </Imac>
    )

    return (
        <Box
            position="relative"
            top={ -500 }
            mb={ -500 }
        >
            <Container>
                { imacImage }
                <TouchDevices>
                    { ipadImage }
                    { iphoneImage }
                </TouchDevices>
            </Container>
        </Box>
    )
}

ProjectImagesInsitu.defaultProps = {
    projectImac: null,
    projectIpad: null,
    projectIphone: null,
}

ProjectImagesInsitu.propTypes = {
    projectImac: PropTypeGatsbyImage,
    projectIpad: PropTypeGatsbyImage,
    projectIphone: PropTypeGatsbyImage,
}

export default ProjectImagesInsitu
