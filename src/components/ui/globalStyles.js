import { css } from 'styled-components';
import { colors } from './theme';

const globalStyles = css`
    @import url('https://fonts.googleapis.com/css?family=Noto+Sans');
    body {
        -webkit-font-smoothing: antialiased;
        font-feature-settings: 'kern' 1, 'liga' 1, 'pnum' 1;
        text-shadow: 'white' 0 0 1px;
        text-size-adjust: 100%;
        font-family: 'Noto Sans', sans-serif;
        background-color: ${colors.text};
        line-height: 1.5;
        margin: 0;
    }
    a:visited {
        fill: inherit;
    }
    a {
        color: inherit;
        text-decoration: none;
        &:hover {
            color: ${colors.highlight};
        }
    }
    html {
        box-sizing: border-box;
        font-size: 100%;
        text-size-adjust: 100%;
    }
    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }
    a {
        background-color: transparent;
    
        &:active,
        &:hover {
            outline: 0;
        }
    }
    img {
        border: 0;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0;
    }
    ul {
        padding-left: 1.5em;
    }
`;

export default globalStyles;