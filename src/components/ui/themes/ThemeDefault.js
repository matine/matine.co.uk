import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { colors } from '../../../styles/theme';
import bgTexture from '../../../img/bg-texture.jpg';

const backgroundColor = theme("mode", {
    default: colors.white,
    inverted: colors.gray[0],
});

const backgroundImage = theme("mode", {
    default: `url(${bgTexture})`,
    inverted: `none`,
});

const color = theme("mode", {
    default: colors.text,
    inverted: colors.primary,
});

const ThemeDefault = styled.div`
    ${props => props.bg && css`
        background-color: ${backgroundColor};
        background-image: ${backgroundImage};
        background-repeat: repeat;
        background-position: center center;
    `}
    ${props => props.color && css`
        color: ${color};
    `}
    ${props => props.svg && css`
        fill: ${color};
    `}
    ${props => props.border && css`
        border-color: ${color};
        border-width: 15px;
        border-style: solid;
        border-bottom: none;
    `}
`;

export default ThemeDefault;