import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';
import DocumentTitle from 'react-document-title';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import theme from './ui/theme';
import globalStyles from './ui/globalStyles';
import printStyles from './ui/printStyles';
 
injectGlobal`
    ${styledNormalize}
    ${globalStyles}
    ${printStyles}
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