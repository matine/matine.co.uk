import styled from 'styled-components';
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

const BackgroundMain = styled.div`
    background-color: ${backgroundColor};
    background-image: ${backgroundImage};
    background-repeat: repeat;
    background-position: center center;
`;

export default BackgroundMain;