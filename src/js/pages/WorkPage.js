import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';

class WorkPage extends Component {
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
                <h2>This is the Work page</h2>
            </div>
        );
    }
}

WorkPage.propTypes = {
    globalContent: PropTypes.shape().isRequired,
};

export default WorkPage;
