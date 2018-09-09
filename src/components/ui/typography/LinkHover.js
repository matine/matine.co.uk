import styled, { css } from 'styled-components';
import { colors } from '../../../styles/theme';

const LinkHover = styled.a`
    ${props => props.hover && css`
        &:hover {
            svg {
                path {
                    fill: ${colors.highlight};
                }
            }
            color: ${colors.highlight};
        }
    `}
    ${props => props.hover === 'big' && css`
        &:hover {
            svg {
                transform: scale(4);
                position: relative;
            }
        }
    `}
    ${props => props.hover === 'arrow' && css`
        transition: transform 1s;

        &:hover {
            .hover--arrow__arrow {
                transform: translate(0, -10px);
            }
        }
    `}
`

export default LinkHover;
