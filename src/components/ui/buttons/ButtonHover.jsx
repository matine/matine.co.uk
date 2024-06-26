import styled, { css } from 'styled-components'
import { colors } from '../theme'
import Button from './Button'

const ButtonHover = styled(Button)`
  ${(props) =>
    props.hover &&
    css`
      &:hover {
        svg {
          path {
            fill: ${colors.highlight};
          }
        }
        color: ${colors.highlight};
      }
    `}
  ${(props) =>
    props.hover === 'big' &&
    css`
      .show-on-hover {
        display: none;
      }
      &:hover {
        svg {
          transform: scale(1.2);
          position: relative;
        }
        .show-on-hover {
          display: block;
        }
      }
    `}
    ${(props) =>
    props.hover === 'arrow' &&
    css`
      transition: transform 1s;

      &:hover {
        .arrow {
          transform: translate(0, -10px);
        }
      }
    `}
`

export default ButtonHover
