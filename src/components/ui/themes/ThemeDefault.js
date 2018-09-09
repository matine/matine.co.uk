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

const opacity = theme("mode", {
    default: 1,
    inverted: .3,
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
    ${props => props.links && css`
        a {
            border-bottom-color: ${color};
        }
    `}
    ${props => props.projectThumbnails && css`
        .project-thumbnail__images {
            opacity: ${opacity};
        }
        .project-thumbnail:hover {
            .project-thumbnail__images {
                opacity: 1;
            }
        }
    `}
`;

export default ThemeDefault;