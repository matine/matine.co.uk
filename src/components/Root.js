import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';
import DocumentTitle from 'react-document-title';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import theme, { fonts, colors } from '../styles/theme';
 
injectGlobal`
    ${styledNormalize}
    body {
        -webkit-font-smoothing: antialiased;
        font-feature-settings: 'kern' 1, 'liga' 1, 'pnum' 1;
        text-shadow: 'white' 0 0 1px;
        text-size-adjust: 100%;
        font-family: ${fonts.base};
        background-color: ${colors.text};
    }
    a:visited {
        fill: inherit;
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