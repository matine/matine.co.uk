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
      background-color: ${colors.primary};
    }
  }
`

export default NavWrap
