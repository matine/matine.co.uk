import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { colors } from '../../../styles/theme';

const backgroundColor = theme("mode", {
    default: colors.gray[0],
    inverted: colors.primary,
});

const color = theme("mode", {
    default: colors.primary,
    inverted: colors.text,
});

const ThemeInverted = styled.div`
    ${props => props.bg && css`
        background-color: ${backgroundColor};
    `}
    ${props => props.color && css`
        color: ${color};
    `}
    ${props => props.svg && css`
        fill: ${color};
    `}
    ${props => props.links && css`
        a {
            border-bottom-color: ${color};
        }
    `}
`;

export default ThemeInverted;