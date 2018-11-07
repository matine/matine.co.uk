import styled, { css } from 'styled-components'
import { space, fontWeight, fontSize, display } from 'styled-system'
import { textStyles, colors } from '../../ui/theme'

const Span = styled.span`
    ${ display }
    ${ space }
    ${ fontWeight }
    ${ fontSize }
    ${ props => props.caps && css`
        ${ textStyles.caps }
    ` }
    ${ props => props.color === 'light' && css`
        color: ${ colors.gray[2] }
    ` }
`

export default Span
