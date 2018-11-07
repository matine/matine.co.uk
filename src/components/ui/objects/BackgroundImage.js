import styled from 'styled-components'
import { backgroundImage, backgroundSize, backgroundPosition, backgroundRepeat,
    width, maxWidth, height } from 'styled-system'

const BackgroundImage = styled.div`
    ${ backgroundImage }
    ${ backgroundSize }
    ${ backgroundPosition }
    ${ backgroundRepeat }
    ${ width }
    ${ maxWidth }
    ${ height }
`

export default BackgroundImage
