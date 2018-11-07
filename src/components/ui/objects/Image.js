import styled from 'styled-components'
import { width, maxWidth, display, position, top, right, bottom, left, zIndex, height } from 'styled-system'

const Image = styled.img`
    ${ width }
    ${ maxWidth }
    ${ display }
    ${ position }
    ${ zIndex }
    ${ top }
    ${ right }
    ${ bottom }
    ${ left }
    ${ height }
`

export default Image
