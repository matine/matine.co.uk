import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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

        return (
            <Provider store={ store }>
                <Router>
                    <Route path="/" component={ App } />
                </Router>
            </Provider>
        );
    }
}

Root.propTypes = {
    store: PropTypes.shape().isRequired,
};

export default Root;
