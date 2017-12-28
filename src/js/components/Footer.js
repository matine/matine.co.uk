import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
    /**
     * Renders the component.
     *
     * @return {XML}
     */
    render() {
        return (
            <footer>
                <h2>This is my footer</h2>
            </footer>
        );
    }
}

Footer.propTypes = {
    globalContent: PropTypes.shape().isRequired,
};

export default Footer;
