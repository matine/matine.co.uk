import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';
import DocumentTitle from 'react-document-title';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import theme, { colors } from './ui/theme';
 
injectGlobal`
    ${styledNormalize}
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
`

class Root extends React.Component {
    /**
     * Renders the component.
     *
     * @return {XML}
     */
    render() {
        const {
            store,
        } = this.props;

        if (!store) {
            return null;
        }

        return (
            <DocumentTitle title="Matine Chabrier">
                <Router>
                    <ThemeProvider theme={ theme }>
                        <Provider store={ store }>
                            <App />
                        </Provider>
                    </ThemeProvider>
                </Router>
            </DocumentTitle>
        );
    }
}

Root.propTypes = {
    store: PropTypes.shape().isRequired,
};

export default Root;