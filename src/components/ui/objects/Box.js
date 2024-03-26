import styled from 'styled-components'
import {
  color,
  space,
  position,
  flexbox,
  gridGap,
  border,
  shadow,
  textAlign,
  layout,
  grid,
} from 'styled-system'

const Box = styled.div`
  ${color}
  ${space}
  ${border}
  ${flexbox}
  ${position}
  ${shadow}
  ${layout}
  ${textAlign}
  ${grid}
  ${gridGap}
`

export default Box
