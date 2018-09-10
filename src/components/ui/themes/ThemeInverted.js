import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { colors } from '../../ui/theme';

const backgroundColor = theme("mode", {
    default: colors.gray[0],
    inverted: colors.primary,
});

const color = theme("mode", {
    default: colors.primary,
    inverted: colors.text,
});

const ThemeInverted = styled.div`
    ${props => props.themeBg && css`
        height: 100%;
        background-color: ${backgroundColor};
    `}
    ${props => props.themeColor && css`
        color: ${color};
    `}
    ${props => props.themeSvg && css`
        fill: ${color};
    `}
    ${props => props.themeLinks && css`
        a {
            border-bottom-color: ${color};
        }
    `}
`;

export default ThemeInverted;