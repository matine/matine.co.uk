import styled, { keyframes } from 'styled-components'
import { breakpoints, colors } from '../../ui/theme'

const showHide = keyframes`
    0% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }
`

const ProjectThumbnail = styled.div`
    position: relative;
    a {
        &:hover,
        &:visited {
            color: ${ colors.text };
        }
    }
    .project-thumbnail__hover {
        background-color: transparent;
    }
    @media (min-width: ${ breakpoints[3] }) {
        .project-thumbnail__hover {
            transition: opacity .25s ease-out;
            opacity: 0;
        }
    }
    .project-thumbnail__image2 {
        opacity: 0;
    }
    &:hover {
        .project-thumbnail__hover {
            opacity: 1;
            background-color: ${ colors.primary };
            transition: all .25s ease-out;
        }

        .project-thumbnail__image2 {
            animation: ${ showHide } 2s infinite;
        }
    }
    .project-thumbnail__images {
        transition: opacity 1s ease-out;
    }
`

export default ProjectThumbnail
