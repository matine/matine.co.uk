import styled from 'styled-components'
import Box from './Box'

const Container = styled(Box)``

Container.defaultProps = {
    mx: 'auto',
    px: [ 3, 4 ],
    maxWidth: 1100,
}

export default Container
