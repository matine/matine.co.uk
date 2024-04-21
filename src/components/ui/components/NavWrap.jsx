import styled from 'styled-components'
import { colors } from '../theme'

const NavWrap = styled.nav`
  a {
    display: block;
    position: relative;
    padding: 0 4px;

    &:hover {
      color: inherit;
    }

    &:hover,
    &.active {
      &::before {
        content: '';
        display: block;
        position: absolute;
        bottom: -5px;
        left: 50%;
        margin-left: -9px;
        width: 18px;
        height: 5px;
        background-color: ${colors.primary};
        border: 1px solid ${colors.primaryDark};
      }
    }
  }
`

export default NavWrap
