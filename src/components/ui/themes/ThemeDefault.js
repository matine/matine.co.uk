import styled, { css } from 'styled-components'
import theme from 'styled-theming'
import { colors } from '../../ui/theme'
import bgTexture from '../../../images/bg-texture.jpg'
import Box from '../objects/Box'

const backgroundColor = theme('mode', {
    default: colors.white,
    inverted: colors.gray[0],
})

const backgroundImage = theme('mode', {
    default: `url(${ bgTexture })`,
    inverted: `none`,
})

const color = theme('mode', {
    default: colors.text,
    inverted: colors.primary,
})

const opacity = theme('mode', {
    default: 1,
    inverted: 0.3,
})

const onlyShowDefault = theme('mode', {
    default: 'block',
    inverted: 'none',
})

const onlyShowInverted = theme('mode', {
    default: 'none',
    inverted: 'block',
})

const ThemeDefault = styled(Box)`
    ${ props => props.themeDisplays && css`
        .only-show-default {
            display: ${ onlyShowDefault };
        }
        .only-show-inverted {
            display: ${ onlyShowInverted };
        }
    ` }
    ${ props => props.themeBg && css`
        background-color: ${ backgroundColor };
        background-image: ${ backgroundImage };
        background-repeat: repeat;
        background-position: center center;
    ` }
    ${ props => props.themeColor && css`
        color: ${ color };
    ` }
    ${ props => props.themeSvg && css`
        fill: ${ color };
    ` }
    ${ props => props.themeBorder && css`
        border-color: ${ color };
        border-width: 15px;
        border-style: solid;
        border-bottom: none;
        border-bottom: none;
    ` }
    ${ props => props.themeLinks && css`
        a {
            border-bottom-color: ${ color };
        }
    ` }
    ${ props => props.themeProjectThumbnails && css`
        .project-thumbnail__images {
            opacity: ${ opacity };
        }
        .project-thumbnail:hover {
            .project-thumbnail__images {
                opacity: 1;
            }
        }
    ` }
`

export default ThemeDefault
