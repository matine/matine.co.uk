import styled, { css, keyframes } from 'styled-components'
import { width, height } from 'styled-system'
import { colors } from '../../ui/theme'

const rotate360 = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`

const SvgWrap = styled.div`
    ${ width }
    ${ height }
    svg path {
        fill: ${ props => `${ colors[props.color] }` }
    }
    ${ props => props.rotate360 && css`
        animation: ${ rotate360 } 2s linear infinite;
    ` }
`

export default SvgWrap
