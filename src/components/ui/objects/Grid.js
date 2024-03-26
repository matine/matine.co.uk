import styled, { css } from 'styled-components'
import { width, maxWidth } from 'styled-system'
import Box from './Box'
import { space } from '../theme'

export const Grid = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  ${(props) =>
    props.gutter >= 0 &&
    css`
      margin: -${space[props.gutter]}px;
      > div {
        padding: ${space[props.gutter]}px;
      }
    `}
  ${(props) =>
    props.gutterX >= 0 &&
    css`
      margin-left: -${space[props.gutterX]}px;
      margin-right: -${space[props.gutterX]}px;
      > div {
        padding-left: ${space[props.gutterX]}px;
        padding-right: ${space[props.gutterX]}px;
      }
    `}
    ${(props) =>
    props.gutterY >= 0 &&
    css`
      margin-top: -${space[props.gutterY]}px;
      margin-bottom: -${space[props.gutterY]}px;
      > div {
        padding-top: ${space[props.gutterY]}px;
        padding-bottom: ${space[props.gutterY]}px;
      }
    `}
`

Grid.defaultProps = {
  gutter: 3,
}
