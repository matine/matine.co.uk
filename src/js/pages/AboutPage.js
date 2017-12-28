import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';

class AboutPage extends Component {
    /**
     * Renders the component.
     *
     * @return {XML}
     */
    render() {
        if (!this.props.globalContent) {
            return null;
        }

        return (
            <div>
                <h2>This is the About page</h2>
            </div>
        );
    }
}

AboutPage.propTypes = {
    globalContent: PropTypes.shape().isRequired,
};

export default AboutPage;
