import styled from 'styled-components'
import { alignItems, alignContent, justifyContent, flexWrap, flexBasis, flexDirection,
    flex, height } from 'styled-system'
import Box from './Box'

const Flex = styled(Box)`
    display: flex;
    ${ alignItems }
    ${ alignContent }
    ${ justifyContent }
    ${ flexWrap }
    ${ flexBasis }
    ${ flexDirection }
    ${ flex }
    ${ height }
`

export default Flex
