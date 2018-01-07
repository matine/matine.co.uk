import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';

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
            <Router>
                <Provider store={ store } >
                    <App />
                </Provider>
            </Router>
        );
    }
}

Root.propTypes = {
    store: PropTypes.shape().isRequired,
};

export default Root;
