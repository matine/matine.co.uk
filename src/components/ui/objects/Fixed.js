import styled from 'styled-components'
import Box from './Box'

const Fixed = styled(Box)``

Fixed.defaultProps = {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
}

export default Fixed
