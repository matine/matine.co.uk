
import styled from 'styled-components';
import { colors } from '../../../styles/theme';

const NavWrap = styled.nav`
    li {
        a {
            position: relative;

            &:hover {
                color: inherit;
            }

            &::before {
                position: absolute;
                right: 50%;
                top: 26px;
                content: '';
                margin-right: -9px;
                display: block;
                width: 18px;
                height: 5px;
                background-color: ${colors.primary};
                opacity: 0;
            }

            &:hover,
            &.active {
                &::before {
                    opacity: 1;
                }
            }
        }
    }
`

export default NavWrap;