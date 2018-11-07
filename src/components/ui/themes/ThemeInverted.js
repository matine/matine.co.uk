import styled, { css } from 'styled-components'
import theme from 'styled-theming'
import { colors } from '../../ui/theme'
import Box from '../objects/Box'

const backgroundColor = theme('mode', {
    default: colors.gray[0],
    inverted: colors.primary,
})

const color = theme('mode', {
    default: colors.primary,
    inverted: colors.text,
})

const ThemeInverted = styled(Box)`
    ${ props => props.themeBg && css`
        background-color: ${ backgroundColor };
    ` }
    ${ props => props.themeColor && css`
        color: ${ color };
    ` }
    ${ props => props.themeSvg && css`
        fill: ${ color };
    ` }
    ${ props => props.themeLinks && css`
        a {
            border-bottom-color: ${ color };
        }
    ` }
`

export default ThemeInverted
