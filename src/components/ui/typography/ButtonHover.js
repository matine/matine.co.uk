import styled, { css } from 'styled-components';
import { colors } from '../../../styles/theme';

const ButtonHover = styled.button`
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
            .arrow {
                transform: translate(0, -10px);
            }
        }
    `}
`

export default ButtonHover;
